import styles from './SuccessNotification.module.scss';

interface ISucceedNotification {
    messages: string[]
}


function SuccessNotification({messages}: ISucceedNotification) {
    return (
        <div className={styles.successNotificationContainer}>
            {
                messages.map((message) => (
                    <p key={message.substring(0, 5)}>
                        {message}
                    </p>
                ))
            }
        </div>
    )
}

export default SuccessNotification;