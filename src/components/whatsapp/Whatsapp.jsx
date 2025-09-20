import styles from "../../components/whatsapp/whatsapp.module.scss";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.png";
function Whatsapp() {
  return (
    <div className={styles.wrapper}>
      <a href="https://wa.me/message/LAQB7NVLMNHVM1">

        <img src={whatsapp_icon} alt="" />
      </a>
    </div>
  );
}

export default Whatsapp;
