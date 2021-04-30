import React from 'react';
import { HomeIcon } from '@heroicons/react/outline';
import 'twin.macro';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

import Heading from '~components/Heading';
import Button, { ButtonLink } from '~components/Button';
import GitHub from '~components/GitHub';
import PageWrapper from '~components/PageWrapper';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="404: Page not Found" desc="This page does not exist." />
    <div tw="container text-center">
      <PageWrapper>
        <Heading level="h1" tw="text-gray-600 dark:(text-gray-300)" text="404: Page not Found" />
        <p tw="text-xl tracking-wide mb-8">Sorry, the page you're looking for does not exist.</p>
        <p tw="flex items-center space-x-6 justify-center">
          <ButtonLink to="/">
            <HomeIcon tw="h-8 w-8" />
            <span>Go Home</span>
          </ButtonLink>
          <Button href="https://github.com/esizer">
            <GitHub tw="h-8 w-8" />
            <span>GitHub</span>
          </Button>
        </p>
      </PageWrapper>
    </div>
  </Layout>
);

export default IndexPage;
