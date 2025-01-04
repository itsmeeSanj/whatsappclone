import styles from "./QR.module.css";

function QR() {
  return (
    <div className={styles.QR_wrap}>
      <div className={styles.QR_card}>
        <div>
          <h1>Log into WhatsApp Web</h1>
          <p>
            Message privately with friends and family using WhatsApp on your
            browser.
          </p>

          <ul>
            <li>Open WhatsApp on your phone</li>
            <li>Tap Menu on Android, or Setting on iPhone</li>
            <li>Tap Linked devices and then Link a device</li>
            <li>Point your phone at this screen to scan the QR scan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QR;
