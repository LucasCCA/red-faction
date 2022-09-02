import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> 
{
    isOnline?: boolean;
    isAway?: boolean;
}
                                                        //rest operator
export function Avatar({ isOnline = true, isAway = true, ...props }: AvatarProps) /*Desestruturaçao*/
{
    return (
        <img 
        className={
            isOnline ? styles.avatarIsOnline : 
            isAway ? styles.avatarIsAway : 
            styles.avatar
        } 
        {...props} //spread operator
        />
    );
}