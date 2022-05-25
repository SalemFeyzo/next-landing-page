/** @jsxImportSource @emotion/react */
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "../components/feature-card-column.js";

const data = [
  {
    id: 1,
    imgSrc: "/assets/key-feature/cloft.svg",
    altText: "Apps",
    title: "Apps",
    text: "Get support while choosing and implementing an online app.",
  },
  {
    id: 2,
    imgSrc: "/assets/key-feature/crm.svg",
    altText: "Data",
    title: "Data",
    text: "Connect the dots with cloud information management systems like CRM.",
  },
  {
    id: 3,
    imgSrc: "/assets/key-feature/web.svg",
    altText: "Web Development",
    title: "Web Development",
    text: "Reserve some cloud space for your company with a modern website.",
  },
  {
    id: 4,
    imgSrc: "/assets/key-feature/it.svg",
    altText: "Tech Guide",
    title: "Tech Guide",
    text: "Improve hardware by following steps from tech guide or demand a training.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the cloud"
          title="Meet the advantages of our cloud consulting services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
