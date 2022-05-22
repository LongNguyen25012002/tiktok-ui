import Styles from './Button.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

const Button = ({ 
    to,
     href, children,text = false,disabled = false, className = false,
      onClick, small = false , large = false ,rounded = false, 
      medium = false, outline = false ,  primary = false ,
      Left_icon = false, Right_icon = false,
       ...passProps}) => {

    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to
    } else if (href){
        props.href = href;
        Comp = 'a';
    }

    // remove when btn is disable
    if (disabled){
        Object.keys(props).forEach((key) => {
            console.log(key)
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        medium,
        text,
        disabled,
        rounded,
        [className]: className,
    });

    return ( 
        <Comp  className={classes} {...props}>
            {Left_icon && <span className={cx('icon')}>{Left_icon}</span>}
            <span className={cx('title')}>{children}</span>
            {Right_icon && <span className={cx('icon')}>{Right_icon}</span>}
        </Comp>
     );
}
 
export default Button;