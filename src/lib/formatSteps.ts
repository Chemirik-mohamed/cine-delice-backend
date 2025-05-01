import type { StepInput } from "schemas/steps.scheam";

export function formatSteps(stpes: StepInput[]): StepInput[] {
  return stpes
    .filter((stpes) => stpes.content.trim() !== "")
    .map((stpes, index) => ({
      content: stpes.content,
      order: stpes.order ?? index + 1,
    }));
}
