import React, { useEffect, useRef } from 'react'
import Post from './Post'
import styles from '../../../styles/components/sections/Project.module.scss'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Project({ posts }) {

    let eachPost = useRef(null)

    useEffect(() => {
        gsap.fromTo(eachPost, {
            y: 50,
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: eachPost,
                start: "top 75%",
                toggleActions: "restart complete none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power1.out"
        })
    })

    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <h1 className={styles.section_title}>Projects</h1>
                <div className={styles.project_container} ref={el => eachPost = el}>
                    {posts.map((post, index) => (
                        <Post post={post} />
                    ))}
                </div>

            </div>
        </section>
    )
}