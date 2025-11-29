export type Difficulty = "beginner" | "intermediate" | "advanced" | null;

export interface Session {
  id: string;
  title: string;
  tags: string[];
  mins: string;
  difficulty: Difficulty;
  popularity: number;
  updatedAt: string;
  completed: boolean;
}
