import { skills } from '../data/data';
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// My Skills</span>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-subtitle">
                        Constantly learning and expanding my toolkit
                    </p>
                </div>

                <div className="skills__grid">
                    {skills.map((category, catIndex) => (
                        <div
                            key={category.category}
                            className={`skills__card glass-card reveal stagger-${catIndex + 1}`}
                        >
                            <div className="skills__card-header">
                                <span className="skills__card-icon">{category.icon}</span>
                                <h3 className="skills__card-title">{category.category}</h3>
                            </div>
                            <div className="skills__items">
                                {category.items.map((skill) => (
                                    <div key={skill.name} className="skills__item">
                                        <div className="skills__item-header">
                                            <span className="skills__item-name">{skill.name}</span>
                                            <span className="skills__item-level">{skill.level}%</span>
                                        </div>
                                        <div className="skills__progress-bar">
                                            <div
                                                className="skills__progress-fill"
                                                style={{ '--progress': `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
