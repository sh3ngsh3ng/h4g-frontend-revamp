export const ADMIN_DASHBOARD_MODE_CREATE = "ADMIN_DASHBOARD_MODE_CREATE";
export const ADMIN_DASHBOARD_MODE_READ = "ADMIN_DASHBOARD_MODE_READ";
export const ADMIN_DASHBOARD_MODE_UPDATE = "ADMIN_DASHBOARD_MODE_UPDATE";
// events
export const EVENT_FORM_TEMPLATE = {
  name: "",
  organization: "",
  skills: [],
  interest: [],
  description: "",
  isCompleted: false,
  maxHoursGiven: 10,
  startDate: "",
  endDate: "",
  images: [],
};

export const NEW_EVENT = {
  name: "Fun O",
  organization: "ACJC",
  maxHoursGiven: 40,
  startDate: "2000-12-12",
  endDate: "2001-10-10",
  description:
    "A year long fund raising event that consist of many events, join in for a time of your life, no skills needed, all you need is to click join",
  interest: [],
  skills: [],
  isCompleted: "true",
};

// list of
export const INTERESTS_LIST = ["Mentoring", "Children", "Elderly", "Fundraising", "Outdoor"];
export const SKILLS_LIST = ["First Aid", "Marketing", "Driving", "Teaching", "Leadership"];

export const EVENT_ATTENDANCE_REQUEST = "EVENT_ATTENDANCE_REQUEST";
export const EVENT_ATTENDANCE_SUCCESS = "EVENT_ATTENDANCE_SUCCESS";
export const EVENT_ATTENDANCE_FAIL = "EVENT_ATTENDANCE_FAIL";
export const EVENT_ATTENDANCE_RESET = "EVENT_ATTENDANCE_RESET";

export const MARK_EVENT_ATTENDANCE_REQUEST = "MARK_EVENT_ATTENDANCE_REQUEST";
export const MARK_EVENT_ATTENDANCE_SUCCESS = "MARK_EVENT_ATTENDANCE_SUCCESS";
export const MARK_EVENT_ATTENDANCE_FAIL = "MARK_EVENT_ATTENDANCE_FAIL";
export const MARK_EVENT_ATTENDANCE_RESET = "MARK_EVENT_ATTENDANCE_RESET";

export const GENERATE_EVENT_QR_REQUEST = "GENERATE_EVENT_QR_REQUEST";
export const GENERATE_EVENT_QR_SUCCESS = "GENERATE_EVENT_QR_SUCCESS";
export const GENERATE_EVENT_QR_FAIL = "GENERATE_EVENT_QR_FAIL";
export const GENERATE_EVENT_QR_RESET = "GENERATE_EVENT_QR_RESET";

export const EVENT_COMPLETE_REQUEST = "EVENT_COMPLETE_REQUEST";
export const EVENT_COMPLETE_SUCCESS = "EVENT_COMPLETE_SUCCESS";
export const EVENT_COMPLETE_FAIL = "EVENT_COMPLETE_FAIL";
export const EVENT_COMPLETE_RESET = "EVENT_COMPLETE_RESET";
