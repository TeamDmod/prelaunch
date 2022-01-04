import BeltItem from "components/DispatchPage/BeltItem";
import styles from "styles/dispatch.module.scss";
import Footer from "components/Footer";
import { getGuildFromInvite } from "utils/Guild";

interface Guild {
  name: string;
  logo?: string;
  url: string;
  members: number;
}

export default function Dispatch({
  clients,
  team,
}: {
  clients: Guild[];
  team: Guild[];
}) {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #061021 0%, #0b2041 100%)",
          minHeight: "min-height: calc(100vh - 6rem)",
          display: "grid",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: 500, color: "#fff", marginTop: "25px" }}>
            Dispatch Program
          </h1>
        </div>
        <div className="top">
          <h1
            style={{
              opacity: "0.75",
              marginTop: "60px",
              color: "#fff",
              fontSize: "2.6em",
              textAlign: "center",
              fontWeight: 400,
              position: "relative",
            }}
          >
            Clientele
          </h1>
          <p style={{ marginBottom: "35px", fontSize: "1.7em" }}>
            Whether your community is focused on competitive gaming, Web3, or a
            university, we'll cover your needs with reliability and care.
          </p>
        </div>

        <div className={styles.belt_container}>
          <div className={styles.belt} left="">
            {clients.map((client) => (
              <BeltItem
                name={client.name}
                icon={client.logo}
                invite={client.url}
                members={client.members}
              />
            ))}
            {clients.map((client) => (
              <BeltItem
                name={client.name}
                icon={client.logo}
                invite={client.url}
                members={client.members}
              />
            ))}
          </div>
        </div>

        <div className="top">
          <h1
            style={{
              opacity: "0.75",
              marginTop: "40px",
              color: "#fff",
              fontSize: "2.6em",
              textAlign: "center",
              fontWeight: 400,
              position: "relative",
            }}
          >
            Our Team
          </h1>
          <p style={{ fontSize: "1.7em" }}>
            Below are some of the communities our staff members have experience
            working with.
          </p>
        </div>

        <div className={styles.belt_container}>
          <div className={styles.belt} right="">
            {team.map((client) => (
              <BeltItem
                name={client.name}
                icon={client.logo}
                invite={client.url}
                members={client.members}
              />
            ))}
            {team.map((client) => (
              <BeltItem
                name={client.name}
                icon={client.logo}
                invite={client.url}
                members={client.members}
              />
            ))}
          </div>
        </div>
        <div style={{ marginTop: "75px" }} />

        {/* FAQ */}
        <h1 style={{ opacity: "0.75", marginBottom: "40px" }}>FAQ</h1>

        <div className={styles.faq}>
          <div className={styles.question} id="question1">
            <a className={styles.questionlink} href="#question1">
              How do I request a Dispatch?
            </a>
            <div className={styles.answer}>
              <p>
                If you're a community owner looking to request a dispatch,
                please visit our{" "}
                <a
                  href="/discord"
                  style={{ color: "lightblue" }}
                >
                  Discord community
                </a>{" "}
                & open up a ticket in our support channel. We'll get back to you
                ASAP!
              </p>
            </div>
          </div>

          <div className={styles.question} id="question2">
            <a className={styles.questionlink} href="#question2">
              How do I apply to become a Dispatch moderator?
            </a>
            <div className={styles.answer}>
              <p>
                If you would like to become a Dispatch moderator, please apply{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfPVHja-oy-ausc4UcPFA3jE-apA0FDEy4hm-cklKFSnVlkQw/viewform"
                  style={{ color: "lightblue" }}
                >
                  here
                </a>
                . We'll review your application, and if you pass, we can move
                onto the interview process.
              </p>
            </div>
          </div>

          <div className={styles.question} id="question3">
            <a className={styles.questionlink} href="#question3">
              What are your community acceptance guidelines?
            </a>
            <div className={styles.answer}>
              <p>
                In order to maintain the level of high-quality work that we want
                to achieve, we accept Dispatch requests based off of our own
                rules & regulations as well as Discord's.{" "}
                <a
                  style={{ color: "lightblue" }}
                  href="https://dmod.super.site/dispatch/community-acceptance-guidelines"
                >
                  Our full acceptance guidelines can be found here
                </a>
              </p>
            </div>
          </div>

          <div className={styles.question} id="question4">
            <a className={styles.questionlink} href="#question4">
              Does Dmod ever dispatch moderators for free?
            </a>
            <div className={styles.answer}>
              <p>
                We do! While we tend to work under paid contracts, we are open
                to dispatching to communities that can't afford to compensate us
                financially.
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px" }} />
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const client_invites = [
    "gh7rTyEfWm", //Rize
    "wooshi", //Whooshi World
    "creavite", //Creavite
    "JKtDeJDXJn", //Faded Panthers
    "message", //Hangout Cafe
    "egirls", //E-Girl Heaven
    "squidgame", //Squid Game
  ];

  const team_invites = [
    "fallguys", //Fall Guys
    "g2esports", //G2 Esports
    "memers", //Dank Memer
    "nzxt", //NZXT
    "wendys", //Wendys
    "dsl", //Discords.com
  ];

  const clients = await Promise.all(
    client_invites.map(async (invite) => {
      return getGuildFromInvite(invite);
    })
  );

  const team = await Promise.all(
    team_invites.map(async (invite) => {
      return getGuildFromInvite(invite);
    })
  );

  return {
    props: {
      clients,
      team,
    },
    revalidate: 3600,
  };
}
