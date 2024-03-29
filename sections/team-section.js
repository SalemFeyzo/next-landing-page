/** @jsxImportSource theme-ui */
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import TeamCard from "../components/team-card";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const data = [
  {
    id: 1,
    imgSrc: "/assets/team/member-1.png",
    altText: "Justin Endrijaitis",
    title: "Justin Endrijaitis",
    designation: "Cloud Consultant",
    socialProfile: [
      {
        id: 1,
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/techomoda",
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: "Twitter",
        path: "https://twitter.com/techomoda",
        icon: <FaTwitter />,
      },
      /*{
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },*/
    ],
  },
  /*{
    id: 2,
    imgSrc: Member2,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Web Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Lina Jutila',
    title: 'Lina Jutila',
    designation: 'Web Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Saimon Harmer',
    title: 'Saimon Harmer',
    designation: 'CEO and Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Aaron Nunez',
    title: 'Aaron Nunez',
    designation: 'Web Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },*/
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="Our Team"
          title="The most qualified and talented individuals"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(1,1fr)",
      null,
      "repeat(1,1fr)",
    ],
  },
};
