import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Prerequisites {
  toEnroll: number[];
  toTakeExam: number[];
  completed: number[];
}

interface Subject {
  code: number;
  subject: string;
  semester: number;
  prerequisites: Prerequisites;
}

interface YearlyPlan {
  year: number;
  totalHours: number;
  subjects: Subject[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  studyPlan: YearlyPlan[] = [
    {
      year: 1,
      totalHours: 660,
      subjects: [
        {
          code: 1,
          subject: 'Algoritmos y Resolución de Problemas',
          semester: 1,
          prerequisites: { toEnroll: [], toTakeExam: [], completed: [] },
        },
        {
          code: 2,
          subject: 'Introducción al Desarrollo Web',
          semester: 1,
          prerequisites: { toEnroll: [], toTakeExam: [], completed: [] },
        },
        {
          code: 3,
          subject: 'Estructura y Funcionamiento de Computadoras',
          semester: 1,
          prerequisites: { toEnroll: [], toTakeExam: [], completed: [] },
        },
        {
          code: 4,
          subject: 'Diseño Web I',
          semester: 2,
          prerequisites: { toEnroll: [2], toTakeExam: [], completed: [2] },
        },
        {
          code: 5,
          subject: 'Sistemas Operativos',
          semester: 2,
          prerequisites: {
            toEnroll: [1, 3],
            toTakeExam: [],
            completed: [1, 3],
          },
        },
        {
          code: 6,
          subject: 'Programación Procedural',
          semester: 2,
          prerequisites: {
            toEnroll: [1, 3],
            toTakeExam: [],
            completed: [1, 3],
          },
        },
        {
          code: 7,
          subject: 'Matemática Aplicada a la Informática',
          semester: 2,
          prerequisites: { toEnroll: [1], toTakeExam: [], completed: [1] },
        },
      ],
    },
    {
      year: 2,
      totalHours: 630,
      subjects: [
        {
          code: 8,
          subject: 'Diseño Web II',
          semester: 1,
          prerequisites: { toEnroll: [4], toTakeExam: [], completed: [4] },
        },
        {
          code: 9,
          subject: 'Base de Datos',
          semester: 1,
          prerequisites: {
            toEnroll: [5, 6, 7],
            toTakeExam: [1],
            completed: [5, 6, 7],
          },
        },
        {
          code: 10,
          subject: 'Programación Orientada a Objetos',
          semester: 1,
          prerequisites: { toEnroll: [6], toTakeExam: [1], completed: [6] },
        },
        {
          code: 11,
          subject: 'Desarrollo Back-end I',
          semester: 2,
          prerequisites: {
            toEnroll: [9, 10],
            toTakeExam: [4],
            completed: [9, 10],
          },
        },
        {
          code: 12,
          subject: 'Inglés I',
          semester: 2,
          prerequisites: { toEnroll: [6], toTakeExam: [3], completed: [6] },
        },
        {
          code: 13,
          subject: 'Estructuras de Datos y Algoritmos',
          semester: 2,
          prerequisites: {
            toEnroll: [10],
            toTakeExam: [6, 7],
            completed: [10],
          },
        },
        {
          code: 14,
          subject: 'Redes',
          semester: 2,
          prerequisites: {
            toEnroll: [5, 7],
            toTakeExam: [4],
            completed: [5, 7],
          },
        },
      ],
    },
    {
      year: 3,
      totalHours: 495,
      subjects: [
        {
          code: 15,
          subject: 'Seguridad en Aplicaciones Web',
          semester: 1,
          prerequisites: {
            toEnroll: [8, 11, 14],
            toTakeExam: [],
            completed: [8, 11, 14],
          },
        },
        {
          code: 16,
          subject: 'Desarrollo Back-end II',
          semester: 1,
          prerequisites: {
            toEnroll: [11],
            toTakeExam: [9, 10],
            completed: [11],
          },
        },
        {
          code: 17,
          subject: 'Inglés II',
          semester: 1,
          prerequisites: { toEnroll: [12], toTakeExam: [], completed: [12] },
        },
        {
          code: 18,
          subject: 'Desarrollo Back-end III',
          semester: 2,
          prerequisites: {
            toEnroll: [16],
            toTakeExam: [9, 10],
            completed: [16],
          },
        },
        {
          code: 19,
          subject: 'Programación para móviles',
          semester: 2,
          prerequisites: {
            toEnroll: [15, 16],
            toTakeExam: [11],
            completed: [15, 16],
          },
        },
        {
          code: 20,
          subject: 'Desarrollo Front-end',
          semester: 2,
          prerequisites: {
            toEnroll: [16],
            toTakeExam: [11, 13],
            completed: [16],
          },
        },
      ],
    },
  ];

  hoveredSubject: number | null = null;
  highlightedToEnroll: number[] = [];
  highlightedToTakeExam: number[] = [];
  highlightedCompleted: number[] = [];
  selectedSubjects: number[] = [];

  checkedSubjects: Record<string, number[]> = {
    rendida: [],
    toEnroll: [],
    toTakeExam: [],
    completed: [],
  };

  ngOnInit() {
    this.loadCheckedSubjects();
  }

  highlightSubject(subjectCode: number) {
    this.hoveredSubject = subjectCode;
  }

  highlightToEnroll(codes: number[], subjectCode: number) {
    this.highlightSubject(subjectCode);
    this.highlightedToEnroll = [...codes];
  }

  highlightToTakeExam(codes: number[], subjectCode: number) {
    this.highlightSubject(subjectCode);
    this.highlightedToTakeExam = [...codes];
  }

  highlightCompleted(codes: number[], subjectCode: number) {
    this.highlightSubject(subjectCode);
    this.highlightedCompleted = [...codes];
  }

  resetHighlight() {
    this.hoveredSubject = null;
    this.highlightedToEnroll = [];
    this.highlightedToTakeExam = [];
    this.highlightedCompleted = [];
  }

  isSelected(subjectCode: number): boolean {
    return this.selectedSubjects.includes(subjectCode);
  }

  toggleCheck(code: number, type: string, event: Event) {
    event.stopPropagation(); // Evita que el click afecte toda la fila

    const stored = JSON.parse(localStorage.getItem('checkedSubjects') || '{}');

    if (!stored[type]) stored[type] = {};

    if (stored[type][code] === 'checked') {
      stored[type][code] = 'unchecked'; // Resetear a ❌
    } else if (stored[type][code] === 'unchecked' || !stored[type][code]) {
      stored[type][code] = 'document'; // Ir a 📄
    } else if (stored[type][code] === 'document') {
      stored[type][code] = 'checked'; // Ir a 📄✅
    }

    localStorage.setItem('checkedSubjects', JSON.stringify(stored));
  }

  getCheckState(code: number, type: string): string {
    const stored = JSON.parse(localStorage.getItem('checkedSubjects') || '{}');
    return stored[type]?.[code] || 'unchecked';
  }

  areAllChecked(codes: number[]): boolean {
    if (!codes.length) return false;

    const stored = JSON.parse(localStorage.getItem('checkedSubjects') || '{}');

    return codes.every(code => stored['rendida']?.[code] === 'checked');
  }

  isChecked(subjectCode: number, type: string): boolean {
    return this.checkedSubjects[type]?.includes(subjectCode) || false;
  }

  saveCheckedSubjects() {
    localStorage.setItem(
      'checkedSubjects',
      JSON.stringify(this.checkedSubjects)
    );
  }

  loadCheckedSubjects() {
    const storedData = localStorage.getItem('checkedSubjects');
    if (storedData) {
      this.checkedSubjects = JSON.parse(storedData);
    }
  }
}
