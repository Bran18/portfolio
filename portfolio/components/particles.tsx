'use client'

import { useCallback } from "react"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#d4fff4",
          },
          links: {
            color: "#22d4bf",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
            max: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1,
              },
            },
            push: {
              quantity: 10,
              size: { value: 3 },
              speed: 2,
              particles: {
                color: { value: "#22d4bf" },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  straight: false
                }
              }
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

