import React, { useEffect, useState, useRef } from "react";

const Counter = () => {
  const [counters, setCounters] = useState({
    renovationProjects: 0,
    teamMembers: 0,
    projectsCompleted: 0,
    satisfiedClients: 0,
  });

  const animationStarted = useRef(false);
  let observer; // Declare observer outside the callback function

  const animateCounters = (targetValue) => {
    const start = performance.now();
    const duration = 40000; // Adjust the duration as needed

    const updateCounters = (timestamp) => {
      const progress = (timestamp - start) / duration;

      setCounters((prevCounters) => ({
        ...prevCounters,
        renovationProjects: Math.min(prevCounters.renovationProjects + progress * 5, targetValue.renovationProjects),
        teamMembers: Math.min(prevCounters.teamMembers + progress * 10, targetValue.teamMembers),
        projectsCompleted: Math.min(prevCounters.projectsCompleted + progress * 10, targetValue.projectsCompleted),
        satisfiedClients: Math.min(prevCounters.satisfiedClients + progress * 6, targetValue.satisfiedClients),
      }));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    requestAnimationFrame(updateCounters);
  };

  const incrementCounterOnScroll = () => {
    if (animationStarted.current) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationStarted.current = true;

          const targetValue = {
            renovationProjects: 1000,
            teamMembers: 100,
            projectsCompleted: 1000,
            satisfiedClients: 100,
          };

          animateCounters(targetValue);

          // Disconnect the observer after animation completes
          observer.disconnect();
        }
      });
    };

    observer = new IntersectionObserver(callback, options);
    observer.observe(document.getElementById("renovationCounter"));
  };

  useEffect(() => {
    window.addEventListener("scroll", incrementCounterOnScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", incrementCounterOnScroll);
    };
  }, [counters]);

  return (
    <div className="flex-wrap rounded-lg justify-center gap-4 px-4 md:px-12 py-8 flex-align-center sm:justify-between bg-secondary">
      <div className="text-center">
        <h1 id="renovationCounter" className="heading !text-slate-100">
          {Math.round(counters.renovationProjects)}+
        </h1>
        <p className="text-slate-100">Itineraries</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">
          {Math.round(counters.teamMembers)}+
        </h1>
        <p className="text-slate-100">Destinations</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">
          {Math.round(counters.projectsCompleted)}+
        </h1>
        <p className="text-slate-100">Customer Reviews</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">
          {Math.round(counters.satisfiedClients)}%
        </h1>
        <p className="text-slate-100">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Counter;
