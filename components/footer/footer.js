/** @jsxImportSource theme-ui */

import { Box, Container, Image, Text } from "theme-ui";
import { Link as Clink } from "../link";
import Link from "next/link";
import data from "./footer.data";

export default function Footer() {
  return (
    <footer sx="styles.footer">
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Clink path="/">
            <Image src="/assets/logo.svg" alt="Logo" />
          </Clink>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Clink
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                />
              ))}
              <Link href="/privacy-policy">
                <a sx={styles.footer.link}>Privacy Policy</a>
              </Link>
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            © {new Date().getFullYear()} Techomoda
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
};
