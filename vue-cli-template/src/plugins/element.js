import Vue from 'vue'
import {
  Drawer,
  Image,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Select,
  Option,
  DatePicker,
  MessageBox,
  Tree,
  Popover,
  Radio,
  RadioGroup,
  RadioButton,
  Dialog,
  Pagination,
  Tag,
  Input,
  InputNumber,
  Form,
  FormItem,
  Table,
  TableColumn,
  Divider,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Badge,
  Avatar,
  ColorPicker,
  Menu,
  MenuItem,
  Submenu,
  Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Card,
  Tooltip,
  Button,
  Message,
  Breadcrumb,
  BreadcrumbItem,
  Notification
} from 'element-ui'

// 按需引入全局配置对象
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };

Vue.use(Drawer);

Vue.use(Image);

Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);

Vue.use(Select);
Vue.use(Option);

Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(RadioGroup);

Vue.use(FormItem);
Vue.use(Form);

Vue.use(Tree);
Vue.use(DatePicker);

Vue.use(Table);
Vue.use(TableColumn);

Vue.use(TabPane);
Vue.use(Tabs);
Vue.use(Tag);

Vue.use(Divider);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Popover);

Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(ColorPicker);
Vue.use(Avatar);
Vue.use(Badge);

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);

Vue.use(Tooltip);

Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);

Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);


Vue.prototype.$message = Message; // 注册消息组件
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
