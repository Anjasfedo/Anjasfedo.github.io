from pathlib import Path
from io import BytesIO
from types import SimpleNamespace
import re
import subprocess
import tempfile
import fitz
from PIL import Image, ImageDraw
from fontTools.ttLib import TTFont, woff2
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public"
TEMP = Path(tempfile.gettempdir())
OUTPUT = ASSETS / "M-Anjasfedo-Afridiansah-Portfolio.pdf"
W, H = 960, 540
NAME = "M Anjasfedo Afridiansah"
SITE = "https://anjasfedo.github.io/"
MAIL = "mailto:fedoafridiansah@gmail.com"
LINKEDIN = "https://linkedin.com/in/m-anjasfedo-afridiansah"
GITHUB = "https://github.com/anjasfedo"
style_source = (ROOT / "src/styles.css").read_text(encoding="utf-8")
COLORS = dict(re.findall(r"--color-([\w-]+):\s*(#[0-9a-fA-F]{6})", style_source))

def color(token):
    h = COLORS[token].lstrip("#")
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))

INK, BODY, MUTED, LINE, SURFACE = [color(k) for k in ("paper", "mist", "ash", "graphite", "obsidian")]
WHITE, LIME = color("carbon"), color("acid-lime")

# Use Node's built-in Brotli decoder without adding Python or project dependencies.
def decompress(data):
    code = "let a=[];process.stdin.on('data',c=>a.push(c));process.stdin.on('end',()=>process.stdout.write(require('node:zlib').brotliDecompressSync(Buffer.concat(a))));"
    return subprocess.run(["node", "-e", code], input=data, capture_output=True, check=True).stdout

woff2.haveBrotli = True
woff2.brotli = SimpleNamespace(decompress=decompress)
FONT_FILES, FONTS = {}, {}
for key, weight in (("regular", 400), ("medium", 510), ("strong", 590)):
    path = TEMP / f"anjasfedo-inter-{weight}.ttf"
    variable = TTFont(ROOT / "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")
    font = instantiateVariableFont(variable, {"wght": weight}, inplace=True)
    font.flavor = None
    font.save(path)
    FONT_FILES[key] = path
    FONTS[key] = fitz.Font(fontfile=str(path))

DOC = fitz.open()
TOC = []
PLACED_TEXT = []
PLACED_IMAGES = []


def text(page, x, y, value, size=12, face="regular", fill=BODY):
    value = str(value)
    width = FONTS[face].text_length(value, fontsize=size)
    if x + width > W - 35:
        raise ValueError(f"Text exceeds page width: {value}")
    baseline = y + FONTS[face].ascender * size
    page.insert_text((x, baseline), value, fontsize=size, fontname=face, color=fill)
    PLACED_TEXT.append((page.number + 1, value, x, y, x + width, baseline - FONTS[face].descender * size))
    return width


def wrap(value, width, size=12, face="regular"):
    lines = []
    for paragraph in value.split("\n"):
        line = ""
        for word in paragraph.split():
            proposal = f"{line} {word}".strip()
            if FONTS[face].text_length(proposal, fontsize=size) <= width:
                line = proposal
            else:
                if line:
                    lines.append(line)
                if FONTS[face].text_length(word, fontsize=size) > width:
                    raise ValueError(f"Word too wide: {word}")
                line = word
        lines.append(line)
    return lines


def para(page, x, y, value, width, size=12, face="regular", fill=BODY, leading=1.42):
    for line in wrap(value, width, size, face):
        text(page, x, y, line, size, face, fill)
        y += size * leading
    return y


def label(page, x, y, value, size=9):
    text(page, x, y, value.upper(), size, "medium", MUTED)


def rule(page, x, y, width):
    page.draw_line((x, y), (x + width, y), color=LINE, width=0.6)


def new_page(section, title=None, subtitle=None):
    page = DOC.new_page(width=W, height=H)
    page_number = f"{page.number + 1:02d}"
    section = f"{page_number} / {section}"
    for key, path in FONT_FILES.items():
        page.insert_font(fontname=key, fontfile=str(path))
    page.draw_rect(page.rect, color=None, fill=WHITE)
    label(page, 44, 27, "ANJASFEDO / SOFTWARE ENGINEER", 8.6)
    width = FONTS["medium"].text_length(section.upper(), fontsize=8.6)
    label(page, W - 44 - width, 27, section, 8.6)
    rule(page, 44, 53, W - 88)
    rule(page, 44, 501, W - 88)
    text(page, 44, 513, NAME, 8, fill=MUTED)
    text(page, 883, 513, page_number, 8, fill=MUTED)
    if title:
        text(page, 44, 74, title, 31, "medium", INK)
        TOC.append([1, title, page.number + 1])
    if subtitle:
        para(page, 44, 118, subtitle, 866, 11.5, fill=MUTED)
    return page


def hyperlink(page, x, y, value, uri, size=10.5, fill=INK):
    width = text(page, x, y, value, size, "medium", fill)
    bottom = y + size * 1.4
    page.draw_line((x, bottom), (x + width, bottom), color=LINE, width=0.7)
    page.insert_link({"kind": fitz.LINK_URI, "from": fitz.Rect(x, y, x + width, bottom + 2), "uri": uri})


def button(page, x, y, value, uri):
    width = FONTS["medium"].text_length(value, fontsize=12) + 32
    page.draw_rect(fitz.Rect(x, y, x + width, y + 38), color=None, fill=LIME, radius=0.15)
    text(page, x + 16, y + 10, value, 12, "medium", INK)
    page.insert_link({"kind": fitz.LINK_URI, "from": fitz.Rect(x, y, x + width, y + 38), "uri": uri})


def bullets(page, x, y, values, width, size=12):
    for value in values:
        page.draw_rect(fitz.Rect(x, y + 6, x + 3, y + 9), color=None, fill=INK)
        y = para(page, x + 14, y, value, width - 14, size)
        y += 9
    return y


def stack(page, x, y, value, width):
    label(page, x, y, "Technology")
    return para(page, x, y + 17, value, width, 10.3, fill=MUTED, leading=1.4)


def screenshot(page, name, x, y, width, height, crop=None, frame=True):
    im = Image.open(ASSETS / name)
    if crop:
        im = im.crop(crop)
    im.thumbnail((1900, 1900), Image.Resampling.LANCZOS)
    data = BytesIO()
    if "A" in im.getbands():
        im.save(data, format="PNG", optimize=True)
    else:
        im.convert("RGB").save(data, format="JPEG", quality=91, optimize=True)
    ratio = min(width / im.width, height / im.height)
    iw, ih = im.width * ratio, im.height * ratio
    xx, yy = x + (width - iw) / 2, y + (height - ih) / 2
    rect = fitz.Rect(xx, yy, xx + iw, yy + ih)
    PLACED_IMAGES.append((page.number + 1, name, rect))
    page.insert_image(rect, stream=data.getvalue())
    if frame:
        page.draw_rect(rect, color=LINE, width=0.65)
    return yy + ih


def case_title(page, project, role, title, summary):
    label(page, 44, 155, project)
    para(page, 44, 173, role, 307, 10.5, fill=MUTED)
    y = para(page, 44, 204, title, 307, 22, "medium", INK, 1.18)
    return para(page, 44, y + 13, summary, 307, 12)


p = new_page("Portfolio / 2026")
TOC.append([1, "Portfolio", 1])
label(p, 46, 129, "Mobile leadership. Full-stack delivery.", 10)
text(p, 40, 165, "PORTFOLIO", 103, "medium", INK)
rule(p, 46, 309, 865)
text(p, 46, 335, NAME, 29, "medium", INK)
para(p, 48, 379, "Software Engineer\nMobile Team Lead & Full-stack Developer", 495, 15, fill=MUTED, leading=1.55)
label(p, 669, 339, "Based in Bengkulu, Indonesia", 9.2)
para(p, 669, 362, "Mobile apps, web platforms,\nIoT backends, and cloud systems.", 240, 12, fill=BODY)
button(p, 669, 420, "Explore the live portfolio", SITE)

p = new_page("Profile", "Engineering across the whole product.", "Mobile, web, backend, and deployment — connected by hands-on delivery.")
screenshot(p, "1725254377.webp", 44, 155, 254, 306, crop=(98, 75, 322, 577), frame=False)
label(p, 44, 467, "M Anjasfedo Afridiansah", 9)
text(p, 44, 483, "Bengkulu, Indonesia", 10.5, fill=MUTED)
para(p, 338, 164, "I lead mobile engineering and build full-stack systems end to end, from Flutter and native apps to web platforms, Go backends, IoT telemetry, and cloud deployments.", 571, 16, "regular", INK, 1.45)
rule(p, 338, 273, 575)
for x, y, title, body in [
    (338, 292, "MOBILE ENGINEERING", "Flutter · Android Kotlin/C\niOS Swift · Team leadership"),
    (638, 292, "FULL-STACK DEVELOPMENT", "React · Next.js · TypeScript\nLaravel · Vue · Node.js"),
    (338, 382, "BACKEND & IOT", "Go · REST APIs · MQTT\nPostgreSQL · MySQL · Redis"),
    (638, 382, "CLOUD & DELIVERY", "AWS · Google Cloud · Docker\nCoolify · CI/CD · IaC"),
]:
    label(p, x, y, title)
    para(p, x, y + 21, body, 273, 12.5, leading=1.5)

p = new_page("Experience", "Lead, build, and share knowledge.", "Engineering roles across product teams, cloud infrastructure, and university teaching.")
label(p, 44, 155, "Current role")
text(p, 44, 178, "Mobile Team Lead", 25, "medium", INK)
text(p, 44, 211, "& Full-stack Developer", 23, "medium", INK)
para(p, 44, 252, "Perseverance Technology Indonesia\n(CV Aranus Technology)", 363, 13.5, "medium")
text(p, 44, 301, "Jun 2024 — Present · Full-time, hybrid", 11, fill=MUTED)
bullets(p, 44, 332, [
    "Lead Flutter and native mobile engineering across the Taiwan and Indonesia entities.",
    "Own full-stack web architecture, server-side logic, cloud deployment, and maintenance.",
], 361, 12.5)
p.draw_line((435, 156), (435, 475), color=LINE, width=0.6)
roles = [
    ("Software Engineer", "PT Rafflesia Agro Investama", "Aug 2025 — Apr 2026 · Part-time, concurrent", "Go APIs, MQTT telemetry, Flutter foundation, and Chikora web showcase."),
    ("DevOps & Solutions Architect Intern", "Elitery · PT Data Sinergitama Jaya Tbk", "Nov 2024 — Jan 2025", "AWS architecture, CI/CD pipelines, IaC, and infrastructure optimization."),
    ("Frontend Engineer Intern", "PT Langgeng Inovasi Teknologi", "Jun 2024 — Aug 2024", "Responsive UI implementation, code reviews, and Agile delivery."),
    ("Assistant Lecturer · Universitas Bengkulu", "Web Programming / Framework Programming", "Jan — Jun 2024 / Aug — Dec 2024", "Hands-on teaching in React, Laravel, MVC, and REST APIs."),
]
y = 154
for title, org, dates, desc in roles:
    text(p, 464, y, title, 13, "medium", INK)
    text(p, 464, y + 19, org, 10.8, fill=BODY)
    text(p, 464, y + 36, dates, 9.5, fill=MUTED)
    para(p, 464, y + 53, desc, 447, 10.5, fill=MUTED, leading=1.25)
    y += 86

p = new_page("Web platforms", "Recruitment, end to end.", "LATUN Jobs · A recruitment platform for marine conservation roles in Bengkulu.")
y = case_title(p, "LATUN Jobs", "Full-stack Developer", "One journey for applicants and reviewers.", "Built the applicant-facing experience and the administrative workflow for LATUN's 2026 recruitment program.")
y = bullets(p, 44, y + 17, [
    "Job board and four-step application wizard.",
    "Document library, per-application chat, and notifications.",
    "Vacancy management and sequential review queue.",
], 310, 11.5)
stack(p, 44, y + 3, "React 19 · TanStack Start · Laravel 13\nSanctum · MySQL · Tailwind 4", 315)
screenshot(p, "job-latun-landing-page.webp", 384, 155, 532, 266)
label(p, 386, 431, "Public job board and coastal-identity landing page", 8.5)
hyperlink(p, 386, 463, "job.latun.or.id", "https://job.latun.or.id/")

p = new_page("Conservation ecosystem", "Tools for conservation teams.", "Connected public communication and grant-management platforms for Laut Untuk Negeri.")
for x, name, image, intro, detail, technology, url in [
    (44, "Grant LATUN", "grant-latun-admin-dashboard-page.webp", "Grant operations, from proposal to reporting.", "Admin and partner portals; six-step proposals, 12-document verification, DOCX legal documents, and reporting.", "Laravel 13 · Inertia 2 · Vue 3 · MySQL", "https://grant.latun.or.id/"),
    (502, "LATUN Website", "latun-landing-page.webp", "A bilingual home for marine conservation.", "Built ID/EN pages for programs, news, events, galleries, downloads, services, and grant information.", "Laravel 13 · Livewire 4 · Flux UI · MySQL", "https://latun.or.id/"),
]:
    text(p, x, 154, name, 21, "medium", INK)
    text(p, x, 184, "Full-stack Developer", 10, fill=MUTED)
    crop = (0, 0, 2542, 1320) if name == "Grant LATUN" else (0, 0, 1600, 850)
    screenshot(p, image, x, 210, 414, 204, crop=crop)
    label(p, x, 416, "Admin dashboard detail" if name == "Grant LATUN" else "Public website detail", 8)
    para(p, x, 436, detail, 414, 10.3, leading=1.3)
    hyperlink(p, x, 480, url.removeprefix("https://").rstrip("/"), url, 9.5)
    text(p, x + 139, 481, "Laravel / Vue" if name == "Grant LATUN" else "Laravel / Livewire", 9.1, fill=MUTED)

p = new_page("Mobile & IoT", "Software for smarter farm operations.", "Chikora · Mobile foundations, web presence, and the original backend and telemetry services.")
label(p, 44, 156, "PT Rafflesia Agro Investama")
para(p, 44, 179, "Connected mobile, web, and IoT engineering.", 424, 23, "medium", INK, 1.2)
para(p, 44, 246, "Built the initial Flutter foundation for flock logging, feed and mortality records, analytics, and offline synchronization before production expansion.", 425, 12.5)
bullets(p, 44, 332, [
    "Developed Go (Chi v5) REST APIs with PostgreSQL.",
    "Built MQTT telemetry pipelines connecting ESP32 sensors and actuators.",
    "Created the Next.js and Supabase web showcase.",
], 425, 11.5)
stack(p, 44, 447, "Flutter · Go · PostgreSQL · MQTT · ESP32 · Next.js", 425)
screenshot(p, "chikora-preview.webp", 573, 151, 193, 343, frame=False)
para(p, 789, 169, "INITIAL\nMOBILE\nFOUNDATION", 127, 10.5, "medium", INK, 1.55)
para(p, 789, 254, "Product preview from the portfolio.", 122, 10.2, fill=MUTED)
para(p, 789, 324, "Historical backend work: the original API was superseded; the MQTT service is offline.", 125, 9.5, fill=MUTED)
hyperlink(p, 789, 453, "View app listing", "https://play.google.com/store/apps/details?id=com.rafflesiaagro.chikora", 9.3)

p = new_page("AI-assisted products", "Recruiting workflows, with AI assistance.", "Yena AI · Early feature development for an AI-powered recruitment SaaS platform.")
label(p, 44, 156, "Full-stack Developer / Freelance")
text(p, 44, 177, "Jan — Nov 2025 · Upwork", 10.7, fill=MUTED)
para(p, 44, 207, "From CV processing to candidate matching.", 307, 24, "medium", INK, 1.2)
para(p, 44, 275, "Contributed initial features before handing off to the core team.", 307, 12)
bullets(p, 44, 326, [
    "BullMQ parsing and multi-provider OCR.",
    "OpenAI vector similarity search and real-time SSE streaming.",
    "Stripe subscriptions, talent pools, and kanban pipelines.",
], 307, 11.5)
stack(p, 44, 448, "Next.js · Express · BullMQ · OpenAI\nStripe · Turborepo", 307)
screenshot(p, "02d-yena-candidate-import-cv-review-data-processed.webp", 385, 159, 531, 290)
label(p, 386, 459, "CV parsing and candidate data review", 8.1)
hyperlink(p, 386, 478, "yena.ai", "https://yena.ai", 9.5)

p = new_page("Local-first tools", "Make every application more deliberate.", "SuratLamaran · A local-first workspace for CVs, cover letters, and freelance proposals.")
y = case_title(p, "SuratLamaran", "Full-stack Developer", "Reusable information. Tailored documents.", "Built a job-application toolkit that combines reusable biodata with role-specific documents and application tracking.")
y = bullets(p, 44, y + 16, [
    "CV and cover-letter builders with PDF export.",
    "Proposal budgets, browser OCR, and reviewable copy-paste AI workflows.",
    "Offline-capable cloud synchronization.",
], 309, 11.5)
stack(p, 44, y + 1, "React 19 · TypeScript · TanStack\nAppwrite · Cloudflare Pages", 309)
screenshot(p, "suratlamaran-cv-preview.webp", 385, 156, 531, 280)
label(p, 387, 451, "Document preview, scoring, and PDF export", 8.2)
hyperlink(p, 387, 477, "suratlamaran.my.id", "https://suratlamaran.my.id/", 9.5)

p = new_page("Personal productivity", "Capture ideas. Understand cash flow.", "Two offline-first applications built around everyday workflows and reviewable AI assistance.")
for x, title, image, summary, technology, url in [
    (44, "Idea Log", "idea-log-ideas-board.webp", "Project-scoped idea boards, progress dashboards, reviewable enhancements, resumable plans, and portable exports.", "React · TanStack Start · IndexedDB\nFirebase Auth / Firestore", "https://idea-log.pages.dev/"),
    (502, "Cash Log", "cash-log-dashboard.webp", "Daily entries, transfers, budgets, savings goals, trips, receipt attachments, and cash-flow reporting in rupiah.", "React · TanStack · Supabase\nPostgreSQL · Cloudflare Pages", "https://cash-log.pages.dev/"),
]:
    text(p, x, 155, title, 24, "medium", INK)
    text(p, x, 189, "Full-stack Developer", 10.3, fill=MUTED)
    screenshot(p, image, x, 214, 414, 174, crop=(0, 0, 1920, 805))
    para(p, x, 399, summary, 414, 11.5, leading=1.35)
    para(p, x, 451, technology, 284, 9.4, fill=MUTED, leading=1.4)
    hyperlink(p, x + 284, 466, url.removeprefix("https://").rstrip("/"), url, 9.1)

p = new_page("Cloud & infrastructure", "From application code to deployment.", "Containerized delivery and cloud-native backend architecture.")
label(p, 44, 155, "Aranus Technology / DevOps")
para(p, 44, 177, "A self-hosted platform for application delivery.", 346, 23, "medium", INK, 1.2)
para(p, 44, 246, "Designed and deployed a Coolify PaaS environment on a VPS for microservices and client applications.", 346, 12)
bullets(p, 44, 313, [
    "Production Dockerfiles and Compose configurations.",
    "Automated deployments, SSL routing, and server orchestration.",
], 346, 11.5)
stack(p, 44, 410, "Coolify · Docker · Docker Compose\nVPS · CI/CD", 345)
hyperlink(p, 44, 476, "aranustech.co.id", "https://aranustech.co.id/", 9.7)
screenshot(p, "aranus-technology-coolify.webp", 430, 155, 486, 250, crop=(0, 0, 1600, 823))
label(p, 432, 424, "Pulih Apps / Bangkit 2024 capstone", 8.7)
para(p, 432, 441, "Django REST backend on Cloud Run and Cloud SQL; APIs, authentication, IAM, and serverless deployment.", 479, 10.5, leading=1.35)
hyperlink(p, 432, 477, "View capstone repository", "https://github.com/C241-PS019/Pulih-Apps-CC", 9.5)

p = new_page("Education & learning", "A foundation in software and cloud.", "Formal education, practical bootcamps, and selected course certificates.")
label(p, 44, 157, "Education & programs")
y = 185
for title, org, dates, detail in [
    ("Bachelor of Informatics", "Universitas Bengkulu", "Aug 2021 — May 2026", "Software engineering and computer networking projects."),
    ("Talenta Cloud Academy", "Solutions Architecture, DevOps & SRE", "Jul 2024 — Jan 2025", "AWS infrastructure, containers, and reliability automation."),
    ("Bangkit Academy", "Cloud Computing Cohort", "Feb — Jun 2024", "Google Cloud architecture and infrastructure deployment."),
]:
    text(p, 44, y, title, 17, "medium", INK)
    text(p, 44, y + 25, org, 11.5)
    text(p, 44, y + 44, dates, 10, fill=MUTED)
    para(p, 44, y + 64, detail, 399, 10.7, fill=MUTED)
    y += 107
p.draw_line((464, 158), (464, 478), color=LINE, width=0.6)
label(p, 493, 157, "Selected course certificates")
y = 187
for title, issuer in [
    ("Google Cybersecurity Specialization", "Google · Jul 2024"),
    ("Google IT Support Specialization", "Google · Jul 2024"),
    ("Google Cloud Computing Foundations", "Google · Mar 2024"),
    ("AWS Cloud Quest: Cloud Practitioner", "Amazon Web Services · Jul 2024"),
    ("Become a Google Cloud Engineer", "Dicoding Indonesia · May 2024"),
    ("Learn to Build Flutter Applications for Beginners", "Dicoding Indonesia · Jan 2025"),
]:
    para(p, 493, y, title, 416, 11.5, "medium", INK)
    text(p, 493, y + 20, issuer, 9.8, fill=MUTED)
    y += 49

p = new_page("Contact")
TOC.append([1, "Contact", p.number + 1])
text(p, 44, 107, "Let's build", 66, "medium", INK)
text(p, 44, 181, "something useful.", 66, "medium", INK)
text(p, 47, 287, NAME, 23, "medium", INK)
para(p, 47, 324, "Mobile Team Lead & Full-stack Developer\nBengkulu, Indonesia", 700, 14, fill=MUTED, leading=1.5)
button(p, 47, 388, "Get in touch", MAIL)
hyperlink(p, 218, 399, "fedoafridiansah@gmail.com", MAIL, 12)
rule(p, 47, 451, 864)
for x, title, value, uri in [
    (47, "Portfolio", "anjasfedo.github.io", SITE),
    (331, "GitHub", "github.com/anjasfedo", GITHUB),
    (615, "LinkedIn", "m-anjasfedo-afridiansah", LINKEDIN),
]:
    label(p, x, 461, title, 8)
    hyperlink(p, x, 478, value, uri, 10.2)

DOC.set_metadata({"title": f"{NAME} | Software Engineering Portfolio", "author": NAME, "subject": "Selected mobile, full-stack, IoT, and cloud engineering work", "keywords": "Anjasfedo, software engineer, Flutter, React, Go, Laravel, cloud, portfolio", "creator": "Custom portfolio layout with PyMuPDF", "producer": "PyMuPDF"})
DOC.set_toc(TOC)
DOC.subset_fonts()
DOC.save(OUTPUT, garbage=4, deflate=True, deflate_images=True, deflate_fonts=True)
DOC.close()

pdf = fitz.open(OUTPUT)
for page in pdf:
    pix = page.get_pixmap(matrix=fitz.Matrix(1.3, 1.3), alpha=False)
    pix.save(TEMP / f"anjasfedo-portfolio-page-{page.number + 1:02d}.png")
for group in range((len(pdf) + 3) // 4):
    sheet = Image.new("RGB", (1920, 1120), "#e3e2de")
    draw = ImageDraw.Draw(sheet)
    for j in range(min(4, len(pdf) - group * 4)):
        n = group * 4 + j
        im = Image.open(TEMP / f"anjasfedo-portfolio-page-{n + 1:02d}.png")
        im.thumbnail((942, 530), Image.Resampling.LANCZOS)
        x, y = (j % 2) * 960 + 9, (j // 2) * 560 + 24
        sheet.paste(im, (x, y))
        draw.text((x, y - 18), f"Page {n + 1}", fill="black")
    sheet.save(TEMP / f"anjasfedo-portfolio-review-{group + 1}.jpg", quality=94)

print("OUTPUT:", OUTPUT)
print("PAGES:", len(pdf))
print("SIZE:", OUTPUT.stat().st_size)
print("LINKS:", sum(len(p.get_links()) for p in pdf))
print("PREVIEWS:", TEMP / "anjasfedo-portfolio-review-1.jpg")
issues = []
for n, value, x0, y0, x1, y1 in PLACED_TEXT:
    if y0 != 513 and y1 > 497:
        issues.append(("BODY OVERFLOW", n, value, round(y1, 2)))
    box = fitz.Rect(x0, y0, x1, y1)
    for image_page, name, image_box in PLACED_IMAGES:
        if n == image_page and (box & image_box).get_area() > 1:
            issues.append(("TEXT / IMAGE OVERLAP", n, value, name))
for page in pdf:
    sizes = [s["size"] for b in page.get_text("dict")["blocks"] for line in b.get("lines", []) for s in line["spans"]]
    assert "\ufffd" not in page.get_text(), "Invalid text encoding"
    print(f"PAGE {page.number + 1}: {len(page.get_text())} text characters, {len(page.get_links())} links, min font {min(sizes):.1f}pt")
assert not issues, issues
print("PASS: no text / image overlaps or body overflow")
