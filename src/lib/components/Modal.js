import styles from "./Modal.module.scss";

function Modal(props) {
  const { showModal } = props;

  if (!showModal) {
    return false;
  }

  /** 
   * Make sure user not clicked on child element 
   * and the emit close event
   */
  function onClickHandler(event) {
    if(event.target === event.currentTarget) {
      props.onBlur()
    } 
  }

  return <div className={styles.modal} onClick={onClickHandler}>{props.children}</div>;
}

export default Modal;
