import mapObjIndexed from 'ramda/es/mapObjIndexed';
import * as React from 'react';

export enum TeamId {
  wasps = 'wasps',
  tornados = 'tornados',
  arrows = 'arrows',
  wanderers = 'wanderers',
  canons = 'canons',
  bats = 'bats',
  kestrels = 'kestrels',
  catapults = 'catapults',
}

interface Logo {
  viewBox: string;
  path: JSX.Element;
}

type Teams = {
  [id in TeamId]: {
    name: string;
    shortName?: string;
    color: string;
    logo: Logo;
  };
};

const teams: Teams = {
  [TeamId.wasps]: {
    name: 'Wasps',
    color: '#FFDD8D',
    shortName: 'WSP',
    logo: {
      viewBox: '0 0 28 28',
      path: <circle cx="14" cy="14" r="14" fill="#FFDD8D" />,
    },
  },
  [TeamId.tornados]: {
    name: 'Tornados',
    color: '#95CEFF',
    logo: {
      viewBox: '0 0 28 28',
      path: <path d="M14 1L27.8564 25H0.143594L14 1Z" fill="#95CEFF" />,
    },
  },
  [TeamId.arrows]: {
    name: 'Arrows',
    color: '#45AAFF',
    logo: {
      viewBox: '0 0 28 28',
      path: <path d="M27 14L3 27.8564L3 0.143594L27 14Z" fill="#45AAFF" />,
    },
  },
  [TeamId.wanderers]: {
    name: 'Wanderers',
    color: '#FF647C',
    logo: {
      viewBox: '0 0 28 28',
      path: <circle cx="14" cy="14" r="14" fill="#FF647C" />,
    },
  },
  [TeamId.canons]: {
    name: 'Canons',
    color: '#F3A35C',
    logo: {
      viewBox: '0 0 28 28',
      path: (
        <g>
          <circle cx="14" cy="14" r="14" fill="#F3A35C" />
          <circle cx="10.5" cy="20.5" r="4.5" fill="white" />
        </g>
      ),
    },
  },
  [TeamId.bats]: {
    name: 'Bats',
    color: '#000000',
    logo: {
      viewBox: '0 0 28 28',
      path: <path d="M14 26L0.143593 2L27.8564 2L14 26Z" fill="black" />,
    },
  },
  [TeamId.catapults]: {
    name: 'Catapults',
    color: '#00E3A2',
    logo: {
      viewBox: '0 0 28 28',
      path: <rect width="28" height="28" fill="#00E3A2" />,
    },
  },
  [TeamId.kestrels]: {
    name: 'Kestrels',
    color: '#00C48C',
    logo: {
      viewBox: '0 0 28 28',
      path: (
        <g>
          <circle cx="14" cy="14" r="14" fill="#00C48C" />
          <path d="M14 9L19.1962 18H8.80385L14 9Z" fill="white" />
        </g>
      ),
    },
  },
};

const getTeam = (id: TeamId) => {
  const team = teams[id];
  if (team === undefined) {
    throw new Error(`no team id ${id}`);
  }
  return team;
};

export const getTeamName = (id: TeamId) => getTeam(id).name;

export const getTeamNameShort = (id: TeamId) =>
  getTeam(id).shortName || getTeamName(id).substr(0, 3);

export const getTeamColor = (id: TeamId): string => getTeam(id).color;
/**
 * used in theme to load the logos into Chakra
 */
export const getTeamLogos = (): { [id in TeamId]: Logo } =>
  mapObjIndexed((t) => t.logo, teams);
