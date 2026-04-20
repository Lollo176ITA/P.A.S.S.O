import TopProgressBar from './progress/TopProgressBar';
import WaveProgressIndicator from './progress/WaveProgressIndicator';

interface Step {
  id: string;
  label: string;
}

interface StepProgressBarProps {
  steps: Step[];
}

export default function StepProgressBar({ steps }: StepProgressBarProps) {
  return (
    <>
      <TopProgressBar />
      <WaveProgressIndicator steps={steps} />
    </>
  );
}
