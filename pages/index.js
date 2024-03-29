import React from "react";
import Layout from "../components/layout";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import SEO from "../components/seo";

import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";
import CloudHint from "../sections/cloudHint";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Techomoda Cloud Consulting | Website Design | Nottingham" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <CloudHint />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
