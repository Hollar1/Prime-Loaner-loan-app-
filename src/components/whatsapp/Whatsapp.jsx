import styles from "../../components/whatsapp/whatsapp.module.scss";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.png";
function Whatsapp() {
  return (
    <div className={styles.wrapper}>
      <img src={whatsapp_icon} alt="" />
    </div>
  );
}

export default Whatsapp;
