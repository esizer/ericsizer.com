import React from 'react';
import 'twin.macro';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

import { Heading1 } from '~components/Heading';
import Button from '~components/Button';
import GitHub from '~components/GitHub';
import PageWrapper from '~components/PageWrapper';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <div tw="container text-center">
      <PageWrapper>
        <Heading1 tw="text-gray-600 dark:(text-gray-300)">Eric Sizer</Heading1>
        <p tw="text-xl tracking-wide mb-8">Web Developer.</p>
        <p tw="flex justify-center">
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
