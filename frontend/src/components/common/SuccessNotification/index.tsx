import styles from './SuccessNotification.module.scss';

interface ISucceedNotification {
    messages: string[]
}


function SuccessNotification({}: ISucceedNotification) {
    return (
        <div className={styles.successNotificationContainer}>
            
        </div>
    )
}

export default SuccessNotification;