import { cn } from '@/libs/utils';
import './style.css';
import Ring, { RingProps } from '@/components/Animation/SolarSystem/Ring';
import NestJS from '@/components/Animation/SolarSystem/items/NestJS';
import NextJS from '@/components/Animation/SolarSystem/items/NextJS';
import CSS3 from '@/components/Animation/SolarSystem/items/CSS3';
import Tailwind from '@/components/Animation/SolarSystem/items/Tailwind';
import Web from '@/components/Animation/SolarSystem/items/Web';
import ReactJS from '@/components/Animation/SolarSystem/items/ReactJS';
import HTML from '@/components/Animation/SolarSystem/items/HTML';
import TS from '@/components/Animation/SolarSystem/items/TS';
import Graphql from '@/components/Animation/SolarSystem/items/Graphql';
import VueJS from '@/components/Animation/SolarSystem/items/VueJS';

const data: RingProps[] = [
  /* CSS3 */
  {
    name: 'CSS3',
    ring: {
      size: {
        width: 100,
      },
      position: {
        top: 270,
        left: 430,
      },
    },
    target: {
      children: <CSS3 />,

      position: {
        top: 10,
        left: 10,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 5,
  },
  /* NestJS */
  {
    name: 'NextJS',
    ring: {
      size: {
        width: 160,
      },
      position: {
        top: 240,
        left: 400,
      },
    },
    target: {
      children: <NextJS />,
      position: {
        top: 110,
        left: 5,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 8,
  },
  /* NestJS */
  {
    name: 'NestJS',
    ring: {
      size: {
        width: 220,
      },
      position: {
        top: 210,
        left: 370,
      },
    },
    target: {
      children: <NestJS />,
      position: {
        top: 56,
        left: 5,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 6,
  },
  /* Tailwind */
  {
    name: 'Tailwind',
    ring: {
      size: {
        width: 330,
      },
      position: {
        top: 158,
        left: 318,
      },
    },
    target: {
      children: <Tailwind />,
      position: {
        top: 56,
        left: 5,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 6,
  },
  /* ReactJS */
  {
    name: 'ReactJS',
    ring: {
      size: {
        width: 400,
      },
      position: {
        top: 120,
        left: 283,
      },
    },
    target: {
      children: <ReactJS />,
      position: {
        top: 56,
        left: 5,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 6,
  },
  /* HTML */
  {
    name: 'HTML',
    ring: {
      size: {
        width: 465,
      },
      position: {
        top: 88,
        left: 250,
      },
    },
    target: {
      children: <HTML />,
      position: {
        top: 56,
        left: 30,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 6,
  },
  /* TS */
  {
    name: 'TS',
    ring: {
      size: {
        width: 534,
      },
      position: {
        top: 53,
        left: 216,
      },
    },
    target: {
      children: <TS />,
      position: {
        top: 56,
        left: 30,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 8,
  },
  /* Graphql */
  {
    name: 'Graphql',
    ring: {
      size: {
        width: 600,
      },
      position: {
        top: 18,
        left: 182,
      },
    },
    target: {
      children: <Graphql />,
      position: {
        top: 208,
        left: -16,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 8,
  },
  /* VueJS */
  {
    name: 'VueJS',
    ring: {
      size: {
        width: 671,
      },
      position: {
        top: -18,
        left: 146,
      },
    },
    target: {
      children: <VueJS />,
      position: {
        top: 208,
        left: -16,
      },
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: 8,
  },
];

const SolarSystemTW = () => {
  return (
    <section className="clearfix ">
      <ul className=" relative h-[700px] list-none duration-[90] overflow-hidden">
        {/* Core */}
        <li
          className={cn(
            'block absolute border-2 border-[#394057] indent-[-9999px] rounded-full border-none z-50 transition-all duration-200 ease-in sun aspect-square',
            'w-[40px] ',
            'top-[302px] left-[462px]',
            'shadow-[0 0 50px #c90]',
          )}
        >
          <a href="#sun">
            <span className="block absolute w-[10px] h-[10px] rounded-full ">
              <Web />
            </span>
          </a>
        </li>

        {data.map((item) => (
          <Ring {...item} />
        ))}
      </ul>

      {/*       <ul
        id="descriptions"
        className="flex flex-col gap-5"
      >
        <li>
          <h2 id="sun">Sun</h2>
          <p>
            The Sun is a star, a hot ball of glowing gases at the heart of our
            solar system. Its influence extends far beyond the orbits of distant
            Neptune and Pluto. Without the Sun's intense energy and heat, there
            would be no life on Earth. And though it is special to us, there are
            billions of stars like our Sun scattered across the Milky Way
            galaxy.
          </p>
        </li>

        <li>
          <h2 id="mercury">Mercury</h2>
          <p>
            Sun-scorched Mercury is only slightly larger than Earth's Moon. Like
            the Moon, Mercury has very little atmosphere to stop impacts and it
            is covered with craters. Mercury's dayside is super heated by the
            Sun, but at night temperatures drop hundreds of degrees below
            freezing. Ice may even exist in craters. Mercury's egg-shaped orbit
            takes it around the Sun every 88 days.
          </p>
        </li>

        <li>
          <h2 id="venus">Venus</h2>
          <p>
            Venus is a dim world of intense heat and volcanic activity. Similar
            in structure and size to Earth, Venus' thick, toxic atmosphere traps
            heat in a runaway 'greenhouse effect.' The scorched world has
            temperatures hot enough to melt lead. Glimpses below the clouds
            reveal volcanoes and deformed mountains. Venus spins slowly in the
            opposite direction of most planets.
          </p>
        </li>

        <li>
          <h2 id="earth">Earth</h2>
          <p>
            Earth is an ocean planet. Our home world's abundance of water - and
            life - makes it unique in our solar system. Other planets, plus a
            few moons, have ice, atmospheres, seasons and even weather, but only
            on Earth does the whole complicated mix come together in a way that
            encourages life - and lots of it.
          </p>
        </li>

        <li>
          <h2 id="mars">Mars</h2>
          <p>
            Though details of Mars' surface are difficult to see from Earth,
            telescope observations show seasonally changing features and white
            patches at the poles. For decades, people speculated that bright and
            dark areas on Mars were patches of vegetation, that Mars could be a
            likely place for life-forms, and that water might exist in the polar
            caps. When the Mariner 4 spacecraft flew by Mars in 1965, many were
            shocked to see photographs of a bleak, cratered surface. Mars seemed
            to be a dead planet. Later missions, however, have shown that Mars
            is a complex member of the solar system and holds many mysteries yet
            to be solved.
          </p>
        </li>

        <li>
          <h2 id="jupiter">Jupiter</h2>
          <p>
            The most massive planet in our solar system, with four large moons
            and many smaller moons, Jupiter forms a kind of miniature solar
            system. Jupiter resembles a star in composition. In fact, if it had
            been about 80 times more massive, it would have become a star rather
            than a planet.
          </p>
        </li>

        <li>
          <h2 id="saturn">Saturn</h2>
          <p>
            Saturn was the most distant of the five planets known to the
            ancients. Like Jupiter, Saturn is made mostly of hydrogen and
            helium. Its volume is 755 times greater than that of Earth. Winds in
            the upper atmosphere reach 500 meters (1,600 feet) per second in the
            equatorial region. These super-fast winds, combined with heat rising
            from within the planet's interior, cause the yellow and gold bands
            visible in the atmosphere.
          </p>
        </li>

        <li>
          <h2 id="uranus">Uranus</h2>
          <p>
            The first planet found with the aid of a telescope, Uranus was
            discovered in 1781 by astronomer William Herschel. The seventh
            planet from the Sun is so distant that it takes 84 years to complete
            one orbit.
          </p>
        </li>

        <li>
          <h2 id="neptune">Neptune</h2>
          <p>
            Nearly 4.5 billion kilometers (2.8 billion miles) from the Sun,
            Neptune orbits the Sun once every 165 years. It is invisible to the
            naked eye because of its extreme distance from Earth. Interestingly,
            the unusual elliptical orbit of the dwarf planet Pluto brings Pluto
            inside Neptune's orbit for a 20-year period out of every 248 Earth
            years
          </p>
        </li>

        <li>
          <h2 id="pluto">Pluto</h2>
          <p>
            Tiny, cold and incredibly distant, Pluto was discovered in 1930 and
            long considered to be the ninth planet. But after the discoveries of
            similar intriguing worlds even farther out, Pluto was reclassified
            as a dwarf planet. This new class of worlds may offer some of the
            best evidence of the origins of our solar system.
          </p>
        </li>
      </ul> */}
    </section>
  );
};
export default SolarSystemTW;
{
  /*         <li
          className={cn(
            'block absolute border-2 border-[#394057] indent-[-9999px] rounded-full animate-spin aspect-square',
            'w-[160px] ',
            'top-[240px] left-[400px] ',
          )}
          style={{ animationDuration: '8s' }}
        >
          <a href="#mercury">
            <span
              className={cn(
                'block absolute rounded-full ',
                'w-[10px] h-[10px]',
                'top-[110px] left-[5px]',
                'bg-[#df5418] ',
              )}
            >
              Venus
            </span>
          </a>
        </li> */
}
