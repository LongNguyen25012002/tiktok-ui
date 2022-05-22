import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles)

const AccountItem = () => {
    return ( <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5c4fabfe4a88721db933fb46ec23db29~c5_100x100.jpeg?x-expires=1653224400&x-signature=3IfrYiPyafws%2BNzaMDtlUHdp%2BUY%3D" alt="Hoaa"/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyễn Văn A</span>
                <FontAwesomeIcon  className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div> );
}
 
export default AccountItem;