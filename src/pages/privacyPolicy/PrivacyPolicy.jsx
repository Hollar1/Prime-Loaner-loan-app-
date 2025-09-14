import styles from "../privacyPolicy/privacyPolicy.module.scss";
import NavBar from "../../components/navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";

function PrivacyPolicy() {
  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Privacy Policy"}/>
      <div className={styles.wrapper}>
        <section>
          <h3>Introduction</h3>
          <p>
            This Privacy Policy describes how we collect, use, and share your
            personal information when you use our loan services. We are
            committed to protecting your privacy and ensuring the security of
            your information.
          </p>
        </section>

        <section>
          <h3>Information We Collect</h3>
          <p>
            We collect various types of information, including personal
            information (such as your name, contact details, and identification
            information), financial information (such as your bank account
            details and transaction history), and business information (such as
            your business name, registration details, and financial
            performance).
          </p>
        </section>

        <section>
          <h3>How we Use Your Information</h3>
          <p>
            We use your information to provide and improve our loan services,
            process loan applications, manage your account, communicate with
            you, and comply with legal and regulatory requirements. We may also
            use your information for marketing and promotional purposes, subject
            to your consent.
          </p>
        </section>

        <section>
          <h3>Information Sharing</h3>
          <p>
            We may share your information with third parties, including credit
            bureaus, financial institutions, and service providers, to
            facilitate our loan services and comply with legal obligations. We
            do not sell or rent your personal information to third parties for
            their marketing purposes.
          </p>
        </section>

        <section>
          <h3>Data Security</h3>
          <p>
            We implement appropriate security measures to protect your
            information from unauthorized access, use, or disclosure. These
            measures include encryption, access controls, and regular security
            assessments. However, no method of transmission over the internet or
            electronic storage is completely secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h3>Your Rights</h3>
          <p>
            You have the right to access, correct, and delete your personal
            information. You may also have the right to object to or restrict
            certain processing of your information. To exercise these rights,
            please contact us using the contact details provided below.
          </p>
        </section>

        <section>
          <h3>Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <a href="mailto:">admin@primeloner.ng</a> or call us at{" "}
            <a href="tel:">+2347067276727</a>
          </p>
        </section>
      </div>
      <span>Last updated October 25, 2025</span>
    </div>
  );
}

export default PrivacyPolicy;
