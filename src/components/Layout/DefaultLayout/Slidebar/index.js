import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';

const cx = classNames.bind(styles);

const SlideBar = () => {
    return ( 
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
     );
}
 
export default SlideBar;