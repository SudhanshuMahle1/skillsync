const calculateReadinessScore = (skills, projects, streak = 0) => {
  let skillScore = 0;

  skills.forEach(skill => {
    let levelWeight = 0.6;
    if (skill.level === "Intermediate") levelWeight = 0.8;
    if (skill.level === "Advanced") levelWeight = 1;

    skillScore += (skill.confidence / 10) * levelWeight * 10;
  });

  skillScore = Math.min(skillScore, 40);

  let projectScore = 0;
  projects.forEach(project => {
    if (project.status === "Planned") projectScore += 5;
    if (project.status === "In Progress") projectScore += 10;
    if (project.status === "Completed") projectScore += 20;
  });

  projectScore = Math.min(projectScore, 40);

  let consistencyScore = Math.min(streak * 2, 20);

  return {
    totalScore: Math.round(skillScore + projectScore + consistencyScore),
    breakdown: {
      skillScore: Math.round(skillScore),
      projectScore: Math.round(projectScore),
      consistencyScore
    }
  };
};

module.exports = calculateReadinessScore;
