import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

import { useState } from 'react';

import styles from './Comment.module.css';

interface CommentProps
{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps)
{
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment()
    {
        onDeleteComment(content);
    }

    function handleLikeComment()
    {
        setLikeCount((state) => { //se depender do valor anterior, e bom seguir esse formato em vez de setLikeCount(likeCount + 1)
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar isOnline={false} isAway={false} src="https://github.com/LucasCCA.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Cândido</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>    
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer className={styles.commmentBoxFooter}>
                    <button onClick={handleLikeComment}> {/*se escrevesse apenas {setLikeCount(likeCount + 1)} o react
                        iria executar a funçao o tempo todo, o certo para nao criar uma funçao nova igual foi feito 
                        seria {() => setLikeCount(likeCount + 1)}*/}
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}