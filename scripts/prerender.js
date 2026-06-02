import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.resolve(distDir, 'index.html');

async function prerender() {
  console.log('🚀 Starting post-build pre-rendering for SEO...');

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Build template not found at ${templatePath}. Run "npm run build" first.`);
    process.exit(1);
  }

  // Start a lightweight Vite instance to load ES modules with assets/icons smoothly
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  let industry = [];
  let projects = [];

  try {
    const siteData = await vite.ssrLoadModule('./src/data/siteData.js');
    industry = siteData.industry || [];
    projects = siteData.projects || [];
  } catch (error) {
    console.error('❌ Failed to load siteData.js via Vite SSR:', error);
    await vite.close();
    process.exit(1);
  } finally {
    await vite.close();
  }

  console.log(`Loaded ${industry.length} industries and ${projects.length} portfolio items.`);

  const template = fs.readFileSync(templatePath, 'utf8');

  // Define static routes and their SEO config
  const routes = [
    {
      path: '',
      title: 'Shivaditya Infotech | Digital Product Engineering',
      description: 'Shivaditya Infotech helps startups and growing businesses launch web platforms, mobile apps, and digital systems with modern engineering, UX-led thinking, and long-term product support.',
    },
    {
      path: 'about',
      title: 'About Us | Shivaditya Infotech',
      description: 'Learn about our history, engineering principles, and how we help businesses build reliable digital systems.',
    },
    {
      path: 'services',
      title: 'Our Services | Shivaditya Infotech',
      description: 'Explore our core expertise: AI solutions development, web apps, mobile apps, UI/UX strategy, custom software, e-commerce, and product engineering.',
    },
    {
      path: 'industry',
      title: 'Industries We Serve | Shivaditya Infotech',
      description: 'Discover our specialized software engineering and design practices across healthcare, sports, social media, real estate, logistics, ERP, and lifestyle apps.',
    },
    {
      path: 'portfolio',
      title: 'Our Portfolio | Shivaditya Infotech',
      description: 'View our work, case studies, and engineering details for custom dashboards, mobile apps, event check-in systems, and digital platforms.',
    },
    {
      path: 'blog',
      title: 'Insights & Articles | Shivaditya Infotech',
      description: 'Practical guides and articles on AI integration, web development, custom software, UI/UX strategy, and digital product engineering.',
    },
    {
      path: 'careers',
      title: 'Careers | Join Our Team | Shivaditya Infotech',
      description: 'Explore open engineering, design, and business positions at Shivaditya Infotech and build high-quality digital products with us.',
    },
    {
      path: 'contact',
      title: 'Contact Us | Shivaditya Infotech',
      description: 'Contact Shivaditya Infotech for website redesigns, custom software, digital products, and development partnerships.',
    },
  ];

  // Add dynamic industry routes
  industry.forEach((item) => {
    routes.push({
      path: `industry/${item.slug}`,
      title: `${item.title} | Industry Solutions | Shivaditya Infotech`,
      description: item.summary,
    });
  });

  // Add dynamic portfolio project routes
  projects.forEach((item) => {
    routes.push({
      path: `portfolio/${item.slug}`,
      title: `${item.title} | Portfolio | Shivaditya Infotech`,
      description: item.summary,
    });
  });

  console.log(`Generating ${routes.length} pre-rendered routes...`);

  routes.forEach((route) => {
    let html = template;

    // Inject custom Title
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${route.title}</title>`);

    // Inject custom Description
    const descRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i;
    if (descRegex.test(html)) {
      html = html.replace(descRegex, `<meta name="description" content="${route.description}" />`);
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${route.description}" />\n</head>`);
    }

    // Inject Open Graph Title
    const ogTitleRegex = /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i;
    if (ogTitleRegex.test(html)) {
      html = html.replace(ogTitleRegex, `<meta property="og:title" content="${route.title}" />`);
    } else {
      html = html.replace('</head>', `  <meta property="og:title" content="${route.title}" />\n</head>`);
    }

    // Inject Open Graph Description
    const ogDescRegex = /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i;
    if (ogDescRegex.test(html)) {
      html = html.replace(ogDescRegex, `<meta property="og:description" content="${route.description}" />`);
    } else {
      html = html.replace('</head>', `  <meta property="og:description" content="${route.description}" />\n</head>`);
    }

    // Determine target directory and file path
    const routeDir = path.join(distDir, route.path);
    const targetFile = path.join(routeDir, 'index.html');

    // Create folder structure if it doesn't exist
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    // Save the customized index.html
    fs.writeFileSync(targetFile, html, 'utf8');
    console.log(`  ✅ Generated: /${route.path}`);
  });

  console.log('🎉 Pre-rendering completed successfully!');
}

prerender();
