// DYAA ICAS student -> Grade access configuration
// Name matching is case-insensitive and ignores extra spaces.
//
// Examples:
//   "timothy": "D",          // only Grade G
//   "Ben Lee": ["C", "D"], // Grades C and D
//   "Teacher Test": "ALL"    // all Grades
//
// IMPORTANT: This is NOT a login/password system. It only controls what the normal
// student page displays after a recognised name is entered.

window.DYAA_STUDENT_GRADE_CONFIG = {
  students: {
    // Add your students here, for example:
    "timothy": "D",
	"Aiden": "C",
	"EthanZ": "C",
	"EthanM": "B",
	"Blake": "B",
	"Brad": "E",
	"Abigail": "E",
    // "Ben Lee": "C",
    // "Chris Wang": ["D", "E"]
  }
};
