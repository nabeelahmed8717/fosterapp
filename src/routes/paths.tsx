// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

// ----------------------------------------------------------------------

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";
const ROOTS_COMPONENTS = "/components";
export const ROOT_HOME = "/home";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  forgotPassword: path(ROOTS_AUTH, "/forgot-password"),
  verify: path(ROOTS_AUTH, "/verify"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page404: "/404",
  page500: "/500",
  components: {
    root: ROOTS_COMPONENTS,
    textFields: path(ROOTS_COMPONENTS, "/text-fields"),
    tables: path(ROOTS_COMPONENTS, "/tables"),
    formTables: path(ROOTS_COMPONENTS, "/form-tables"),
  },
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    info: path(ROOTS_DASHBOARD, "/info"),
    booking: path(ROOTS_DASHBOARD, "/booking"),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, "/mail"),
    all: path(ROOTS_DASHBOARD, "/mail/all"),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, "/chat"),
    new: path(ROOTS_DASHBOARD, "/chat/new"),
    conversation: path(ROOTS_DASHBOARD, "/chat/:conversationKey"),
  },
  calendar: path(ROOTS_DASHBOARD, "/calendar"),
  user: {
    root: path(ROOTS_DASHBOARD, "/user"),
    profile: path(ROOTS_DASHBOARD, "/user/profile"),
    account: path(ROOTS_DASHBOARD, "/user/account"),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, "/blog"),
    posts: path(ROOTS_DASHBOARD, "/blog/posts"),
    post: path(ROOTS_DASHBOARD, "/blog/post/:title"),
    postById: path(
      ROOTS_DASHBOARD,
      "/blog/post/apply-these-7-secret-techniques-to-improve-event"
    ),
    newPost: path(ROOTS_DASHBOARD, "/blog/new-post"),
  },
};
