import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ThemedImage from '@theme/ThemedImage';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Platform Engineering Hub"
      description="Центр знаний по Internal Developer Platform (IDPs) и Platform Engineering">

      <Head>
        <meta property="og:image" content="/img/image.jpeg" />
      </Head>
      <div className="text--center">
        <ThemedImage
          sources={{
            light: '/img/image.png',
            dark: '/img/image.png'
          }}
          width={200}

          alt="Логотип"
        />
      </div>
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">
            Platform Engineering Hub
          </h1>
          <p className="hero__subtitle">
            Центр знаний о Platform Engineering и Internal Developer Platforms (IDP).
            Инструменты, гайды и кейсы для создания эффективных платформ разработки.
          </p>
          <div className={styles.buttons}>
            <a
              className="button button--primary button--lg"
              href="/docs/intro">
              Начать знакомство →
            </a>
          </div>
        </div>
      </header>

      <main>
        <HomepageFeatures />
      </main>
    </Layout >
  );
}
