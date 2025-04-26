export type PredictedPotatoStatus = {
  class: string;
  confidence: number;
  image: string;
};

export type InputBoxProps = {
  setPotato: React.Dispatch<React.SetStateAction<PredictedPotatoStatus | null>>;
};

export type PredictedPotatoCardProps = {
  resetPotato: () => void;
  potato: PredictedPotatoStatus;
};
