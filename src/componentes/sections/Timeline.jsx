import React from 'react';
import styles from './Timeline.module.css';

function Timeline() {
    const events = [
        { year: 2018, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { year: 2019, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { year: 2020, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { year: 2021, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ];

    return (
        <div className={styles.timeline}>
            <h2>Sobre mim</h2>
            <div className={styles.timelineContainer}>
                {events.map((event, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineYear}>{event.year}</div>
                        <div className={styles.timelineContent}>{event.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
