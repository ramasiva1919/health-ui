
// import React from 'react';
// import { withTranslation } from 'react-i18next';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import '../../assets/css/formModal.css';
// import '../../assets/css/custom.css';
// import '../../assets/css/responsiveness.css';
// import Spinner from 'react-bootstrap/Spinner';
// import close from '../../assets/images/close.png';
// import deleteIcon from '../../assets/images/close-round.png';
// import edit from '../../assets/images/edit.png';
// import body from '../../assets/images/body.png';
// import hoverbody from '../../assets/images/hover-bd.png';
// import clocks from '../../assets/images/clocks.png';
// // import Navbar from '../public/NavBar';
// import AdvancSearch from './../public/AdvancedSearch';
// import moment from 'moment';
// import _ from 'lodash';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { getEmergencyContact } from '../../actions/StudentAction/GetEmergencyContactDetails';
// import ReactTooltip from 'react-tooltip';
// import TreeHierarchy from '../common/TreeHierarchy';
// import { getAssessmentNodes, getActiontakenNodes } from '../common/HierarchyTreeTemplates';
// import { showTreeHierarchy } from '../common/functions/commonFuntions';
// import { postStudentVisitList } from ".././../../src/actions/StudentAction/PostStudentVisitLogAction";
// import { fetchStudentVistSearchList } from ".././../../src/actions/StudentAction/GetStudentVisitSearchLogAction";
// import { fetchStudentVistSubItemsList } from ".././../../src/actions/StudentAction/GetVisitSubItemsAction";
// import { toast } from "react-toastify";
// import { getUpdateStudentEmailVisitEmailData } from ".././../../src/actions/StudentAction/PostVisitEmailAction";
// import { getUpdateStudentEmailVisitTemplateData } from ".././../../src/actions/StudentAction/PostVisitTemplateViewLogAction";
// import { postSchoolVisitList } from ".././../../src/actions/StudentAction/PostSchoolVisitTypes";
// import { fetchSchoolVisitTypes } from ".././../../src/actions/StudentAction/GetSchoolVisitTypesAction";
// import "toasted-notes/src/styles.css";
// import {
//   getUserToken,
//   getUserId,
//   getParentid_school,
//   getSchoolID
// } from "../../services/AuthService";
// import Modal from "react-bootstrap/Modal";
// import { folder, nkcParentID } from "../../constants/Constants";
// import { objectOf } from "prop-types";
// import { fetchStudentInfo } from "../../actions/StudentAction/GetSudentInfoAction";
// let alphabetList = [
//   {
//     name: 'selectedAlphabet',
//     value: 'A',
//     title: 'A',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'B',
//     title: 'B',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'C',
//     title: 'C',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'D',
//     title: 'D',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'E',
//     title: 'E',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'F',
//     title: 'F',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'G',
//     title: 'G',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'H',
//     title: 'H',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'I',
//     title: 'I',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'J',
//     title: 'J',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'K',
//     title: 'K',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'L',
//     title: 'L',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'M',
//     title: 'M',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'N',
//     title: 'N',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'O',
//     title: 'O',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'P',
//     title: 'P',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'Q',
//     title: 'Q',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'R',
//     title: 'R',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'S',
//     title: 'S',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'T',
//     title: 'T',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'U',
//     title: 'U',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'V',
//     title: 'V',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'W',
//     title: 'W',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'X',
//     title: 'X',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'Y',
//     title: 'Y',
//   },
//   {
//     name: 'selectedAlphabet',
//     value: 'Z',
//     title: 'Z',
//   },
// ];

// const enableInitialPrestVisitTypes = ["Choking","Clothing","COVID Concern","Dental","Diarrhea","Drowsy/Tired"
// ,"Ear Concerns","Emergency Benadryl","Emergency Epipen","Eye Concerns","Fever","Head ache","Head bump/injury","Head Lice","Injury","Menstruation"
// ,"Mental Health","Neuro","Nosebleed","Other","Pregnancy Complaint","Reassessment"
// ,"Respiratory Symptoms","Restraint","Restroom Use","Seizure Activity","Skin Assessment","Sore Throat"
// ,"Temperature Assessment","Toileting/Diapering/Restroom Assistance","Vomiting","Eye Concerns",
// "Pregnancy Complications","Muscle Aches/Muscle cramps","Seizure","Parent Contact",
// "Toileting/Diapering/Restroom Use","Respiratory","Medication", "Vitals", "Other visits","Stomachache/Nausea","Gastrostomy Tube (Gtube)"];
// const disableInitialPrestVisitTypes = ["Parent Contact","Medication","Immunizations"];

// var visitTypes = [];
// var today = new Date(),
//   time = today.getHours() + ':' + today.getMinutes();
// class AddNewVisit extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       preview: false,
//       viewLog: false,
//       viewTemplate: false,
//       loadWithoutTemplate: false,
//       otherCausedShow: false,
//       otherSymptomsShow: false,
//       otherFirstAidShow: false,
//       textCharacter: 250,
//       BlobUrl: null,
//       formUpload: false,
//       filename: null,
//       base64: '',
//       fileName: '',
//       fileType: '',
//       updateFormFileUploadFlag: false,
//       textFirstAidCharacter: 250,
//       textcaused: 250,
//       noteCharacter: 250,
//       Modalshow: false,
//       noteShow: false,
//       visitTimeIn: new Date(),
//       visitTimeOut: new Date(),
//       selectedAlphabet: 'All',
//       searchWord: '',
//       emailparent: false,
//       parentMessage: '',
//       medicineIntake: false,
//       medicationDetails: '',
//       studentInformation: '',
//       physicalTest: false,
//       testDetails: '',
//       note: '',
//       contactwithparent: false,
//       designatedemergencycontact:false,
//       vitalInformation: false,
//       visitOutcome: 'Return to class',
//       bp: '',
//       temperature: '',
//       respiration: '',
//       o2saturation: '',
//       heartRate: '',
//       otherSymptoms: false,
//       otherFirstAid: false,
//       otherCausedBy: false,
//       studentSymptoms: [],
//       studentFirstAid: [],
//       studentCausedBy: [],
//       studentInstructionTeaching :[],
//       ListByBodyPart: {},
//       fullList: {},
//       showBodyList: false,
//       imgLeft: 0,
//       imgRight: 0,
//       searchByWord: [],
//       deseaseName: '',
//       visitTimeInError: '',
//       visitTimeOutError: '',
//       currentTimedata: time,
//       emailError: '',
//       messageStatus: 'not sent',
//       isContainParentsDetails: false,
//       reason: '',
//       editMode: '',
//       isEditable: false,
//       subItemsList: {},
//       addOrEditVisitTypes: { visitTypes: [] },
//       initialpresentation: [],
//       parentcontactlist: [],
//       restroom: [],
//       fk_visittype:"",
//       unSupportedFile: false,
//       assessmentHierarchy: {
//         checked: [],
//         expanded: []
//       },
//       actiontakenHierarchy: {
//         checked: [],
//         expanded: []
//       },
//       symptomTextbox1:"",
//       symptomTextbox2:"",
//       symptomTextbox3:"",
//       symptomTextbox4:"",
//       symptomTextbox5:"",
//       symptomTextbox6:"",
//       symptomTextbox7:"",
//       lastereportvisitName:"",
//       lastReportedBM:"",
//       submitButtonDisabled: false
//     };
//   }
//   componentWillReceiveProps(props) {
//     if (props.subItemsList && props.subItemsList.length !== 0) {
//       this.setState({
//         subItemsList: props.subItemsList,
//       });
//     }
//     if (props.getEmergencyContactResponse.length !== 0) {
//       if (props.getEmergencyContactResponse.data.length === 0) {
//         this.setState({
//           isContainParentsDetails: true,
//           reason: 'Please add parent email.',
//         });
//       } else {
//         if (
//           props.getEmergencyContactResponse.data[0].parentDetails
//             .parentemailaddress === null
//         ) {
//           this.setState({
//             isContainParentsDetails: true,
//             reason: 'Please add parent email.',
//           });
//         } else {
//           this.setState({ isContainParentsDetails: false });
//         }
//       }
//     }
//   }
//   getStudentInfo = () => {
//     let Id = this.props.match.params.Id;
//     let studentObj = { id_studentInformation: Id };
//     this.props.dispatch(getEmergencyContact(studentObj));
//   };
//   async componentDidMount() {
//     const idObj = {
//       parentid_school: getParentid_school(),
//     };
//     let Id = this.props.match.params.Id;
//     // if(getUserToken().schoolId){
//     await this.props.dispatch(fetchSchoolVisitTypes({ schoolId: getParentid_school() }));
//     if (this.props.schoolVisitTypes.result && this.props.schoolVisitTypes.result.alphabets) {
//       this.setState({ addOrEditVisitTypes: { visitTypes: this.props.schoolVisitTypes.result.alphabets } })
//     }
//     // }
//     await this.props.dispatch(fetchStudentVistSearchList(idObj));
//     visitTypes = this.props.visitSearchList;
//     this.getStudentInfo();
//   }
//   viewTemplate = async () => {
//     if (this.state.viewTemplate == false) {
//       this.setState({
//         viewTemplate: true,
//       });
//     } else {
//       this.setState({
//         viewTemplate: false,
//       });
//     }
//     await this.props.dispatch(
//       getUpdateStudentEmailVisitTemplateData({
//         studentInformation: this.props.match.params.Id,
//         visitType: this.props.subItemsList.visittype,
//         parentMessage: this.state.parentMessage,
//       })
//     );
//   };

//   loadWithoutTemplate = async () => {
//     await this.props.dispatch(
//       getUpdateStudentEmailVisitTemplateData({
//         studentInformation: this.props.match.params.Id,
//         visitType: this.props.subItemsList && this.props.subItemsList.visittype ? this.props.subItemsList.visittype : this.state.fk_visittype,
//         parentMessage: this.state.parentMessage,
//       })
//     );
//   };

//   handleSubmitVisitTypes = async () => {
//     const schools = getUserToken().schools;
//     // const schoolOptions = {
//     // schools.map((school) => ({
//     // schoolId: school.fk_school,
//     // visitTypes: this.state.addOrEditVisitTypes.visitTypes,
//     // id:getParentid_school()
//     // }));
//     // }
//     await this.props.dispatch(postSchoolVisitList({
//       visitTypes: this.state.addOrEditVisitTypes.visitTypes,
//       id: getParentid_school()
//     }))
//     if (this.props.schoolVisitTypePost) {
//       toast.success("School visit types has been submitted", {
//         autoClose: 5000,
//       });
//     }
//     this.props.dispatch(fetchSchoolVisitTypes({ schoolId: getParentid_school() }));
//   }

//   handleView = (url, blobName) => {
//     url = this.state.uploadedFile;
//     blobName = this.state.fileName;
//     fetch(url, {
//       method: 'GET',
//       headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//       },
//     }).then((response) => {
//       response.blob().then((blob) => {
//         let url = window.URL.createObjectURL(blob);
//         let a = document.createElement('a');
//         a.href = url;
//         a.target = '_blank';
//         a.print = blobName;
//         a.click();
//       });
//     });
//   };
//   handleClick = (e) => {
//     visitTypes = this.props.visitSearchList;
//     this.setState({
//       selectedAlphabet: e.target.name,
//       showBodyList: false,
//       searchWord: '',
//       searchByWord: [],
//     });
//     if (e.target.name != 'All') {
//       visitTypes = visitTypes.filter((obj) => obj.alphabet === e.target.name);
//     }
//   };

//   handleChangeTextBoxSymptoms = (e) => {
//   if(e.target.name === 'Last reported BM' &&
//   _.find(this.state.studentSymptoms, { symptom: e.target.name })){
//     const studentSymptoms = this.state.studentSymptoms.map(obj=>{
//       if(e.target.name === obj.symptom){
//         obj.value = e.target.value
//       }
//       return obj;
//     })
//     this.setState({
//       studentSymptoms: studentSymptoms,
//     });
//   }else if(e.target.name === 'Last ate drank' &&
//   _.find(this.state.studentSymptoms, { symptom: e.target.name })){
//     const studentSymptoms = this.state.studentSymptoms.map(obj=>{
//       if(e.target.name === obj.symptom){
//         obj.value = e.target.value
//       }
//       return obj;
//     })
//     this.setState({
//       studentSymptoms: studentSymptoms,
//     });
//   }else if(e.target.name === 'Time bleeding began' &&
//   _.find(this.state.studentSymptoms, { symptom: e.target.name })){
//     const studentSymptoms = this.state.studentSymptoms.map(obj=>{
//       if(e.target.name === obj.symptom){
//         obj.value = e.target.value
//       }
//       return obj;
//     })
//     this.setState({
//       studentSymptoms: studentSymptoms,
//     });
//   }
//   else{
//     let studentSymptoms = this.state.studentSymptoms;
//     studentSymptoms.push({symptom:e.target.name, value:e.target.value})
//     this.setState({
//       studentSymptoms: studentSymptoms,
//     });
//   }
// }

//   handleChangeSymptoms = (e) => {
//     let studentSymptoms = this.state.studentSymptoms;
//     if (e.target.name == 'otherSymptomsDetails') {
//       this.setState({
//         otherSymptomsShow: true,
//         textCharacter: 250 - e.target.value.length,
//       });
//     }
//     if (e.target.name == 'otherSymptoms') {
//       if (e.target.checked == true) {
//         this.setState({
//           otherSymptoms: true,
//         });
//       } else {
//         this.setState({
//           otherSymptoms: false,
//         });
//       }
//     }

//     if (
//       e.target.checked == true &&
//       !_.find(studentSymptoms, { symptom: e.target.name })
//     ) {
//       studentSymptoms.push({ symptom: e.target.name });
//     } else if (e.target.checked == false) {
//       studentSymptoms = studentSymptoms.filter((studentSymptomObj) => {
//         if (studentSymptomObj.symptom != e.target.name) {
//           return studentSymptomObj;
//         }
//       });
//     }

//     if (
//       this.state.otherSymptoms == true &&
//       e.target.name == 'otherSymptomsDetails'
//     ) {
//       if(studentSymptoms && studentSymptoms.length){
//         studentSymptoms.map((studentSymptomObj) => {
//           if (studentSymptomObj.symptom == 'otherSymptoms') {
//             studentSymptomObj.otherSymptomsDetails = e.target.value;
//           }
//         });
//       }
//     }

//     this.setState({
//       studentSymptoms: studentSymptoms,
//     });
//   };

//   reUploadFile = (e, updateFormFlag) => {
//     this.setState({
//       fileName: "",
//       fileType: "",
//       pdfdata: "",
//       fileTypeValidation: "",
//       uploadedFile: false,
//       unSupportedFile: false,
//     });
//   }

//   handleDataChangedChecked=(treeData)=>{
//     this.state.assessmentHierarchy.checked = treeData
//   }
//   handleDataChangedExpanded=(treeData)=>{
//     this.state.assessmentHierarchy.expanded = treeData
//   }
//   handleactiontakenChangedChecked=(treeData)=>{
//     this.state.actiontakenHierarchy.checked = treeData
//   }
//   handleactiontakenChangedExpanded=(treeData)=>{
//     this.state.actiontakenHierarchy.expanded = treeData
//   }

//   uploadHealthForm = (e, updateFormFlag) => {
//     let fileError = this.state.fileError;
//     if (e.target.files[0].size > 104857600) {
//       if (e.target.name === 'base64') {
//         fileError = 'File too large';
//         this.setState({
//           fileError: fileError,
//         });
//       } else {
//         fileError = 'File too large';
//         this.setState({
//           fileError: fileError,
//         });
//       }
//     }
//     if (
//       e.target.files[0].type === 'image/png' ||
//       e.target.files[0].type === 'application/pdf' ||
//       e.target.files[0].type === 'image/jpeg' ||
//       e.target.files[0].type === 'image/jpg' ||
//       e.target.files[0].type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
//       e.target.files[0].type !== 'application/vnd.ms-excel' &&      
//       e.target.files[0].type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.template' &&
//       e.target.files[0].type !== 'application/vnd.ms-excel.sheet.macroEnabled.12' &&
//       e.target.files[0].type !== 'application/vnd.ms-excel.template.macroEnabled.12' &&
//       e.target.files[0].type !== 'application/vnd.ms-excel.addin.macroEnabled.12' &&
//       e.target.files[0].type !== 'application/vnd.ms-excel.sheet.binary.macroEnabled.12' &&
//       e.target.files[0].type !== 'text/plain' &&
//       e.target.files[0].type !== 'text/csv' &&
//       e.target.files[0].type !== 'application/msword' &&
//       e.target.files[0].type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
//       e.target.files[0].type !== 'text/tsv'
//     ) {
//       if (updateFormFlag) {
//         this.setState({
//           updateFormFileUploadFlag: true,
//         });
//       } else {
//         this.setState({
//           updateFormFileUploadFlag: false,
//         });
//       }
//       this.setState({
//         fileName: e.target.files[0].name,
//         fileType: e.target.files[0].type,
//         pdfdata: e.target.result,
//         fileTypeValidation: null,
//       });
//     } else {
//       if(
//         e.target.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
//         e.target.files[0].type === 'application/vnd.ms-excel' ||
//         e.target.files[0].type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.template' ||
//         e.target.files[0].type === 'application/vnd.ms-excel.sheet.macroEnabled.12' ||
//         e.target.files[0].type === 'application/vnd.ms-excel.template.macroEnabled.12' ||
//         e.target.files[0].type === 'application/vnd.ms-excel.addin.macroEnabled.12' ||
//         e.target.files[0].type === 'application/vnd.ms-excel.sheet.binary.macroEnabled.12' ||
//         e.target.files[0].type === 'text/plain' ||
//         e.target.files[0].type === 'text/csv' ||
//         e.target.files[0].type === 'text/tsv' ||
//         e.target.files[0].type !== 'application/msword' ||
//         e.target.files[0].type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
//         this.setState({unSupportedFile: true})
//       }
//       this.setState({
//         fileName: e.target.files[0].name,
//         fileType: e.target.files[0].type,
//         pdfdata: e.target.result,
//         fileTypeValidation: 'File Type Not Supported ',
//       });
//     }
//     this.Main(e.target.files[0], updateFormFlag);
//     // this.uploadPopUp();
//     e.target.value = null;
//   };
//   toBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });

//   Main = async (files) => {
//     const file = files;
//     const uploadedFile = await this.toBase64(file);
//     this.setState({
//       uploadedFile: uploadedFile,
//       formUpload: true,
//     });
//   };

//   handleSearch = (e) => {
//     this.state.selectedAlphabet = "All"
//     if (this.state.showBodyList) {
//       let list = [];
//       let visitBodyList = JSON.stringify(this.props.visitBodySearchList);
//       visitBodyList = JSON.parse(visitBodyList);

//       if(visitBodyList && visitBodyList.length){
//         visitBodyList.map((obj) => {
//           obj.visittypes = obj.visittypes.filter((obj2) => {
//             if (obj2.visittypename) {
//               if (
//                 obj2.visittypename
//                   .toUpperCase()
//                   .includes(e.target.value.toUpperCase())
//               ) {
//                 return obj2;
//               }
//             }
//           });
//           if (obj.visittypes.length > 0) {
//             list.push(obj);
//           }
//         });
//       }
//       if (list.length > 0) {
//         this.setState({
//           searchWord: e.target.value,
//           ListByBodyPart: list,
//         });
//       }
//     } else {
//       let list = [];
//       let visitList = JSON.stringify(this.props.visitSearchList);
//       visitList = JSON.parse(visitList);

//       if(visitList && visitList.length){
//         visitList.map((obj) => {
//           obj.visitType = obj.visitType.filter((obj2) => {
//             if (obj2.visittypename) {
//               if (
//                 obj2.visittypename
//                   .toUpperCase()
//                   .includes(e.target.value.toUpperCase())
//               ) {
//                 return obj2;
//               }
//             }
//           });
//           if (obj.visitType.length > 0) {
//             list.push(obj);
//           }
//         });
//       }
     
//       if (list.length > 0) {
//         this.setState({
//           searchByWord: list,
//         });
//       }
//     }
//   };

//   handleChangeCaused = (e) => {
//     if (e.target.name == 'otherCausedByDetails') {
//       this.setState({
//         otherCausedShow: true,
//         textcaused: 250 - e.target.value.length,
//       });
//     }
//     let studentCausedBy = this.state.studentCausedBy;
//     if (e.target.name == 'otherCausedBy') {
//       if (e.target.checked == true) {
//         this.setState({
//           otherCausedBy: true,
//         });
//       } else {
//         this.setState({
//           otherCausedBy: false,
//         });
//       }
//     }

//     if (
//       e.target.checked == true &&
//       !_.find(studentCausedBy, { cause: e.target.name })
//     ) {
//       studentCausedBy.push({ cause: e.target.name });
//     } else if (e.target.checked == false) {
//       studentCausedBy = studentCausedBy.filter((studentCausedByObj) => {
//         if (studentCausedByObj.causedBy != e.target.name) {
//           return studentCausedByObj;
//         }
//       });
//     }

//     if (
//       this.state.otherCausedBy == true &&
//       e.target.name == 'otherCausedByDetails'
//     ) {
//       if(studentCausedBy && studentCausedBy.length){
//         studentCausedBy.map((studentCausedByObj) => {
//           if (studentCausedByObj.cause == 'otherCausedBy') {
//             studentCausedByObj.otherCausedByDetails = e.target.value;
//           }
//         });
//       }
//     }

//     this.setState({
//       studentCausedBy: studentCausedBy,
//     });
//   };

//   mapAlphabets() {
//     let newArr = [];
//     if(alphabetList && alphabetList.length){
//       alphabetList.map((alphabetListObj) => {
//         let listExist = this.props.visitSearchList.filter(
//           (obj) => obj.alphabet === alphabetListObj.title
//         );
//         if (listExist.length > 0) {
//           newArr.push(
//             <li>
//               <a
//                 style={{
//                   cursor: 'pointer',
//                   textDecoration: 'underline!important',
//                 }}
//                 name={alphabetListObj.value}
//                 onClick={this.handleClick}
//                 className={
//                   alphabetListObj.value == this.state.selectedAlphabet
//                     ? 'active'
//                     : ''
//                 }
//               >
//                 {alphabetListObj.title}
//               </a>
//             </li>
//           );
//         }
//       });
//     }
//     return newArr;
//   }

//   handleChangeFirstAid = (e) => {
//     if (e.target.name == 'otherFirstAidDetails') {
//       this.setState({
//         otherFirstAidShow: true,
//         textFirstAidCharacter: 250 - e.target.value.length,
//       });
//     }

//     let studentFirstAid = this.state.studentFirstAid;
//     if (e.target.name == 'otherFirstAid') {
//       if (e.target.checked == true) {
//         this.setState({
//           otherFirstAid: true,
//         });
//       } else {
//         this.setState({
//           otherFirstAid: false,
//         });
//       }
//     }

//     if (
//       e.target.checked == true &&
//       !_.find(studentFirstAid, { firstaid: e.target.name })
//     ) {
//       studentFirstAid.push({ firstaid: e.target.name });
//     } else if (e.target.checked == false) {
//       studentFirstAid = studentFirstAid.filter((studentFirstAidObj) => {
//         if (studentFirstAidObj.firstaid != e.target.name) {
//           return studentFirstAidObj;
//         }
//       });
//     }

//     if (
//       this.state.otherFirstAid == true &&
//       e.target.name == 'otherFirstAidDetails'
//     ) {
//       if(studentFirstAid && studentFirstAid.length){
//         studentFirstAid.map((studentFirstAidObj) => {
//           if (studentFirstAidObj.firstaid == 'otherFirstAid') {
//             studentFirstAidObj.otherFirstAidDetails = e.target.value;
//           }
//         });
//       }
//     }

//     this.setState({
//       studentFirstAid: studentFirstAid,
//     });
//   };

//   handleChangeInstructionTeaching = (e) => {  
//     let studentInstructionTeaching = this.state.studentInstructionTeaching;
//     if (
//       e.target.checked == true &&
//       !_.find(studentInstructionTeaching, { instructionteaching: e.target.name })
//     ) {
//       studentInstructionTeaching.push({ instructionteaching: e.target.name });
//     } else if (e.target.checked == false) {
//       studentInstructionTeaching = studentInstructionTeaching.filter((studentInstructionTeachingObj) => {
//         if (studentInstructionTeachingObj.instructionteaching != e.target.name) {
//           return studentInstructionTeachingObj;
//         }
//       });
//     }

//     this.setState({
//       studentInstructionTeaching: studentInstructionTeaching,
//     });
//   };

//   handleDelete = () => {
//     this.setState({
//       base64: '',
//       fileName: '',
//       fileType: '',
//       fileSize: '',
//       uploadedFile: '',
//       unSupportedFile: false,
//     });
//   };
//   handleClickSearch = () => { };

//   handleChange = (e) => {  

//     if (this.state.parentMessage) {
//       this.setState({
//         viewLog: true,
//       });
//     } else {
//       this.setState({
//         viewLog: false,
//       });
//     }

//     if (e.target.name === 'note') {
//       this.setState({
//         noteCharacter: 250 - e.target.value.length,
//         noteShow: true,
//       });
//     }
//     if (e.target.name == 'emailparent') {
//       this.props.dispatch(
//         getUpdateStudentEmailVisitTemplateData({
//           studentInformation: this.props.match.params.Id,
//           visitType: this.props.subItemsList.visittype,
//           parentMessage: this.state.parentMessage,
//         })
//       );
//       if (_.isEmpty(this.props.studentVisitEmailTemplate)) {
//         let emailMessage = 'Please add parent email.';
//         this.setState({
//           emailError: emailMessage,
//         });
//       }
//       if (e.target.checked == true) {
//         this.setState({
//           [e.target.name]: true,
//           preview: true,
//         });
//       } else {
//         this.setState({
//           [e.target.name]: false,
//           preview: false,
//           viewTemplate: false,
//           emailError: false,
//         });
//       }
//     } else if (e.target.name == 'contactwithparent' || e.target.name == 'designatedemergencycontact') {
//       if (e.target.checked == true) {
//         this.setState({
//           [e.target.name]: true,
//         });
//       } else {
//         this.setState({
//           [e.target.name]: false,
//         });
//       }
//     } else if (e.target.name == 'vitalInformation') {
//       if (e.target.checked == true) {
//         this.setState({
//           [e.target.name]: true,
//         });
//       } else {
//         this.setState({
//           [e.target.name]: false,
//         });
//       }
//     } else if (e.target.id == 'initialpresentation') {
//       let initialpresentation = this.state.initialpresentation;
//       if (e.target.checked) {
//         initialpresentation.push(e.target.name)
//       } else {
//         let index = initialpresentation.indexOf(e.target.name);
//         initialpresentation.splice(index, 1);
//       }
//       this.setState({ initialpresentation: initialpresentation })
//     } else if (e.target.id == "notehome") {
//       if (e.target.checked) {
//         this.setState({ notehome: true });
//       } else {
//         this.setState({ notehome: false });
//       }
//     } else if (e.target.id == 'parentcontactlist') {
//       let parentcontactlist = this.state.parentcontactlist;
//       if (e.target.checked) {
//         parentcontactlist.push(e.target.name)
//       } else {
//         let index = parentcontactlist.indexOf(e.target.name);
//         parentcontactlist.splice(index, 1);
//       }
//       this.setState({ parentcontactlist: parentcontactlist })
//     } else if (e.target.id == 'restroom') {
//       let restroom = this.state.restroom;
//       if (e.target.checked) {
//         restroom.push(e.target.name)
//       } else {
//         let index = restroom.indexOf(e.target.name);
//         restroom.splice(index, 1);
//       }
//       this.setState({ restroom: restroom })
//     } else {
//       if(e.target.id === 'bloodpressure'){
//         if(e.target.value.match(/^[0-9/ ]*$/)){
//           this.setState({
//             [e.target.name]: e.target.value,
//           });
//         }
//       } else {
//         this.setState({
//           [e.target.name]: e.target.value,
//         });
//       }
//     }
//   };

//   async handleVisitSubItems(obj) {
//     this.setState({
//       deseaseName: obj.visittypename,
//       Modalshow: true,
//       fk_visittype:  obj.fk_visittype,
//       lastereportvisitName:obj.visittypename
//     });
//     await this.props.dispatch(
//       // fetchStudentVistSubItemsList({ visitType: obj._id,id:getUserToken().parentid_school })
//       fetchStudentVistSubItemsList({ visitType: obj.fk_visittype, id: getUserToken().parentid_school })
//     );
//   }

//   handleChangeVisitTypes(e, visitName) {
//     let selVisitTypes = JSON.parse(JSON.stringify(this.state.addOrEditVisitTypes));
//     // const schoolID = this.props.student.data[0].fk_school;
//     if (selVisitTypes.visitTypes.length) {
//       if (e.target.checked == true) {
//         selVisitTypes.visitTypes.push(visitName);
//       } else {
//         const ind = selVisitTypes.visitTypes.indexOf(visitName);
//         selVisitTypes.visitTypes.splice(ind, 1);
//       }

//       this.setState({ addOrEditVisitTypes: { visitTypes: selVisitTypes.visitTypes } });
//     } else {
//       let visitTypes = [];
//       visitTypes.push(visitName);
//       this.setState({ addOrEditVisitTypes: { visitTypes } });
//     }
//   }

//   visitCheckboxMap = () => {
//     let visitTypeArray = [];
//     if (this.state.searchByWord.length > 0) {
//       visitTypes = this.state.searchByWord;
//     } else if (visitTypes.length > 0 || this.state.selectedAlphabet != 'All') {
//       visitTypes = visitTypes;
//     } else {
//       visitTypes = this.props.visitSearchList;
//     }

//     const visitTypesSel = this.state.addOrEditVisitTypes.visitTypes && this.state.addOrEditVisitTypes.visitTypes.length ? this.state.addOrEditVisitTypes.visitTypes : { visitTypes: [] };

//     if(visitTypes && visitTypes.length){
//       visitTypes.map((visitTypeObj) => {
//         visitTypeArray.push(
//           <>
//             <h1>{visitTypeObj.alphabet}</h1>
//             <li>
//               {visitTypeObj.visitType &&
//                 visitTypeObj.visitType.map((obj) => (
//                   <div className="form-check checkbox-check w-49 d-inline-block">
//                     <input
//                       className="form-check-input p-0"
//                       type="checkbox"
//                       defaultValue
//                       id="checkbox1"
//                       name={obj.visittypename}
//                       onChange={(e) => this.handleChangeVisitTypes(e, obj.visittypename)}
//                       checked={visitTypesSel.length && visitTypesSel.indexOf(obj.visittypename) > -1 ? true : false}
//                     />
//                     <label className="form-check-label tick-box"
//                     // htmlFor="checkbox1"
//                     >
//                       {obj.visittypename}
//                     </label>
//                   </div>
//                 ))}
//             </li>
//           </>
//         );
//       });
//     }
 
//     return visitTypeArray;
//   };

//   handleEditSubItem = (obj, type, objectType) => {
//     let subObj = { ...this.state.subItemsList };
//     const subArray = subObj[type];
//     if (subArray && subArray.length > 0) {
//       const index = subArray.findIndex(
//         (item) => item[objectType] === obj[objectType]
//       );
//       if (index > -1) {
//         subArray.splice(index, 1);
//       }
//     }
//     subObj[type] = subArray;
//     this.setState({
//       subItemsList: subObj,
//     });
//   }

//   visitListMapping = () => {
//     let visitTypeArray = [];
//     if (this.state.searchByWord.length > 0) {
//       visitTypes = this.state.searchByWord;
//     } else if (visitTypes.length > 0 || this.state.selectedAlphabet != "All") {
//       visitTypes = visitTypes;
//     } else {
//       visitTypes = this.props.visitSearchList;
//     }

//     const visitTypesSel = this.state.addOrEditVisitTypes.visitTypes && this.state.addOrEditVisitTypes.visitTypes.length ? this.state.addOrEditVisitTypes.visitTypes : { visitTypes: [] };
//     if(visitTypes && visitTypes.length){
//       visitTypes.map((visitTypeObj) => {
//         visitTypeArray.push(
//           <>
//             <h1>{visitTypeObj.alphabet}</h1>
//             <li>
//               {visitTypeObj.visitType &&
//                 visitTypeObj.visitType.map((Obj) => {
//                   if ((visitTypesSel.length && visitTypesSel.indexOf(Obj.visittypename) > -1) || !visitTypesSel.length) {
//                     return (<p
//                       data-toggle="modal"
//                       data-target="#addVisitModal"
//                       className="visits-cursor"
//                       onClick={() => this.handleVisitSubItems(Obj)}
//                     >
//                       {Obj.visittypename}
//                     </p>)
//                   }
//                 })
//               }
//             </li>
//           </>
//         );
//       });
//     }
  
//     return visitTypeArray;
//   };

//   validateNumbers = (e,allowedVal) =>{
//     const re = /^[0-9\b]+$/;
//     let considerVal ='';
//     if (e.target.value === '' || re.test(e.target.value) && e.target.id !== "symptomTextbox1" 
//     && _.toInteger(e.target.value) <= allowedVal && e.target.value !== "00") {
//       considerVal = e.target.value;
//       this.setState({[e.target.id]: e.target.value})
//     }
//     if( e.target.id === "symptomTextbox1"){
//       considerVal = e.target.value;
//       this.setState({[e.target.id]: e.target.value})
//     }
//     if(considerVal){
//       if(this.state.studentSymptoms && this.state.studentSymptoms.length){
//         const studentSymptoms = this.state.studentSymptoms.map(obj=>{
//           if(e.target.name === obj.symptom){
//             obj.value = e.target.value
//           }
//           return obj;
//         })
//         this.setState({studentSymptoms:studentSymptoms})
//       }
//     }
//   }


//   validateText = (e) =>{
//  if(this.state.studentSymptoms && this.state.studentSymptoms.length){
//       const studentSymptoms = this.state.studentSymptoms.map(obj=>{
//         if(e.target.name === obj.symptom){
//           obj.value = e.target.value
//         }
//         return obj;
//       })
//       this.setState({[e.target.id]: e.target.value})
//       this.setState({studentSymptoms:studentSymptoms})
//     }
// }

//   subItemsSymptomsMapping = () => {
//     let subItemsSymptomsArray = [];
//     if(this.state.subItemsList &&
//       this.state.subItemsList.symptoms && this.state.subItemsList.symptoms.length){
//       this.state.subItemsList.symptoms.map((symptomObj) => {
//         if(symptomObj.symptom && _.toLower(symptomObj.symptom) !== _.toLower('other')){
//           subItemsSymptomsArray.push(
//             <div className='form-check checkbox-check w-49 d-inline-block'>
//               <input
//                 className='form-check-input p-0'
//                 type='checkbox'
//                 defaultValue
//                 id='checkbox1'
//                 name={symptomObj.symptom}
//                 onChange={this.handleChangeSymptoms}
//               />
//               <div class='subitem-edit subItemsCheckboxDiv'>
//                 <label className='form-check-label tick-box' 
//                 // htmlFor='checkbox1'
//                 >
//                   {symptomObj.symptom}
//                 </label>
//                 {this.state.isEditable && this.state.editMode === 'symptoms' && (
//                   <div
//                     onClick={() =>
//                       this.handleEditSubItem(symptomObj, 'symptoms', 'symptom')
//                     }
//                   >
//                     <img src={deleteIcon} width={13} alt='' />
//                   </div>
//                 )}
//               {_.find(this.state.studentSymptoms,{symptom:'Last ate/drank'}) &&
//               symptomObj.symptom === 'Last ate/drank' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                 <input
//                   className='form-control p-0'
//                   id='symptomTextbox1'
//                   type="text" 
//                   onChange={(e)=>this.validateNumbers(e,null)}
//                   name={symptomObj.symptom}
//                 />
//                 </div>
//               }
//               {_.find(this.state.studentSymptoms,{symptom:'Pain rated using 0-20/FACES scale'}) &&
//                 symptomObj.symptom === 'Pain rated using 0-20/FACES scale' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                   <input
//                     className='form-control mr-0'
//                     id='symptomTextbox2'
//                     type="number" 
//                     value={this.state.symptomTextbox2}
//                     maxlength="2"
//                     onChange={(e)=>this.validateNumbers(e,10)}
//                     name={symptomObj.symptom}
//                   />
//                 </div>
//               }
//               {_.find(this.state.studentSymptoms,{symptom:'Pain rated using 0-10/FACES scale'}) &&
//                 symptomObj.symptom === 'Pain rated using 0-10/FACES scale' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                   <input
//                     className='form-control mr-0'
//                     id='symptomTextbox2'
//                     type="number" 
//                     value={this.state.symptomTextbox2}
//                     maxlength="1"
//                     onChange={(e)=>this.validateNumbers(e,10)}
//                     name={symptomObj.symptom}
//                   />
//                 </div>
//               } 

//         {_.find(this.state.studentSymptoms,{symptom:'Site of impact'}) &&
//                symptomObj.symptom === 'Site of impact' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                   <input
//                     className='form-control mr-0'
//                     id='symptomTextbox3'
//                     type="text" 
//                     value={this.state.symptomTextbox3}
//                     onChange={this.validateText}
//                     name={symptomObj.symptom}
//                   />
//                 </div>
//               }

//                {_.find(this.state.studentSymptoms,{symptom:'Reported EDC'}) &&
//                symptomObj.symptom === 'Reported EDC' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                   <input
//                     className='form-control mr-0'
//                     id='symptomTextbox4'
//                     type="text" 
//                     value={this.state.symptomTextbox4}
//                     onChange={this.validateText}
//                     name={symptomObj.symptom}
//                   />
//                 </div>
//               }

//             {_.find(this.state.studentSymptoms,{symptom:'Gestation (weeks)'}) &&
//                symptomObj.symptom === 'Gestation (weeks)' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                   <input
//                     className='form-control mr-0'
//                     id='symptomTextbox5'
//                     type="text" 
//                     value={this.state.symptomTextbox5}
//                     onChange={this.validateText}
//                     name={symptomObj.symptom}
//                   />
//                 </div>
//               } 

//           {_.find(this.state.studentSymptoms,{symptom:'Location of ache/cramp'}) &&
//                symptomObj.symptom === 'Location of ache/cramp' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                   <input
//                     className='form-control mr-0'
//                     id='symptomTextbox6'
//                     type="text" 
//                     value={this.state.symptomTextbox6}
//                     onChange={this.validateText}
//                     name={symptomObj.symptom}
//                   />
//                 </div>
//               } 

//           {_.find(this.state.studentSymptoms,{symptom:'RN called to'}) &&
//                symptomObj.symptom === 'RN called to' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                   <input
//                     className='form-control mr-0'
//                     id='symptomTextbox7'
//                     type="text" 
//                     value={this.state.symptomTextbox7}
//                     onChange={this.validateText}
//                     name={symptomObj.symptom}
//                   />
//                 </div>
//               }  

              
//           {_.find(this.state.studentSymptoms,{symptom:'Last reported BM'}) &&
//                symptomObj.symptom === 'Last reported BM' &&
//                 <div className='form-check w-49 d-inline-block pl-0'>
//                   <input
//                     className='form-control mr-0'
//                     id='lastReportedBM'
//                     type="text" 
//                     value={this.state.lastReportedBM}
//                     onChange={this.validateText}
//                     name={symptomObj.symptom}
//                   />
//                 </div>
//               }            

//               </div>
//             </div>
//           );
//         }
//       });
//     }
//     return subItemsSymptomsArray;
//   };

  

//   subItemsCausedByMapping = () => {
//     let subItemsCausesArray = [];
//     if(this.state.subItemsList &&
//       this.state.subItemsList.causedby && this.state.subItemsList.causedby.length){
//         this.state.subItemsList.causedby.map((causedByObj) => {
//           if(_.toLower(causedByObj.cause) !== _.toLower('other')){
//             subItemsCausesArray.push(
//               <div className='form-check checkbox-check w-49 d-inline-block'>
//                 <input
//                   className='form-check-input p-0'
//                   type='checkbox'
//                   defaultValue
//                   id='checkbox1'
//                   name={causedByObj.cause}
//                   onChange={this.handleChangeCaused}
//                 />
//                 <div class='subitem-edit'>
//                   <label className='form-check-label tick-box' 
//                   // htmlFor='checkbox1'
//                   >
//                     {causedByObj.cause}
//                   </label>
//                   {this.state.isEditable && this.state.editMode === 'causedby' && (
//                     <div
//                       onClick={() =>
//                         this.handleEditSubItem(causedByObj, 'causedby', 'cause')
//                       }
//                     >
//                       <img src={deleteIcon} width={13} alt='' />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           }
//         });
//     }
//     return subItemsCausesArray;
//   };

//   subItemsFirstAidMapping = () => {
//     let subItemsFirstAidArray = [];
//     if(this.state.subItemsList &&
//       this.state.subItemsList.firstaid && this.state.subItemsList.firstaid.length){
//       this.state.subItemsList.firstaid.map((firstAidObj) => {
//         subItemsFirstAidArray.push(
//           <div className='form-check checkbox-check w-100 d-inline-block'>
//             <input
//               className='form-check-input p-0'
//               type='checkbox'
//               defaultValue
//               id='checkbox1'
//               name={firstAidObj.firstaid}
//               onChange={this.handleChangeFirstAid}
//             />
//             <div class='subitem-edit'>
//               <label className='form-check-label tick-box' 
//               // htmlFor='checkbox1'
//               >
//                 {firstAidObj.firstaid}
//               </label>
//               {this.state.isEditable && this.state.editMode === 'firstaid' && (
//                 <div
//                   onClick={() =>
//                     this.handleEditSubItem(firstAidObj, 'firstaid', 'firstaid')
//                   }
//                 >
//                   <img src={deleteIcon} width={13} alt='' />
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       });
//     }
//     return subItemsFirstAidArray;
//   };

//   subItemsInstructionTeachingMapping = () => {
//     let subItemsInstructionTeachingArray = [];
//     if(this.state.subItemsList &&
//       this.state.subItemsList.instructionteaching && this.state.subItemsList.instructionteaching.length){
//       this.state.subItemsList.instructionteaching.map((instructionTeachingObj) => {
//         subItemsInstructionTeachingArray.push(
//           <div className='form-check checkbox-check w-100 d-inline-block'>
//             <input
//               className='form-check-input p-0'
//               type='checkbox'
//               defaultValue
//               id='checkbox1'
//               name={instructionTeachingObj.instructionteaching}
//               onChange={this.handleChangeInstructionTeaching}
//             />
//             <div class='subitem-edit'>
//               <label className='form-check-label tick-box' 
//               // htmlFor='checkbox1'
//               >
//                 {instructionTeachingObj.instructionteaching}
//               </label>
//               {this.state.isEditable && this.state.editMode === 'instructionteaching' && (
//                 <div
//                   onClick={() =>
//                     this.handleEditSubItem(instructionTeachingObj, 'instructionteaching', 'instructionteaching')
//                   }
//                 >
//                   <img src={deleteIcon} width={13} alt='' />
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       });
//     }
//     return subItemsInstructionTeachingArray;
//   };

//   handleSubmit = async () => {
//     if (!this.state.submitButtonDisabled) {
//     this.setState({submitButtonDisabled: true});
//     await this.loadWithoutTemplate();
//     if (this.state.emailparent) {
//       this.setState({
//         messageStatus: 'email sent',
//       });

//       await this.props.dispatch(
//         getUpdateStudentEmailVisitEmailData({
//           email: this.props.studentVisitEmailTemplate.email,
//         })
//       );
//     }
//     let Id = this.props.match.params.Id;
//     this.setState({
//       Modalshow: false,
//     });

//     let obj = {
//       base64: this.state.uploadedFile,
//       fileType: this.state.fileType,
//       fileName: this.state.fileName,
//       visitTimeIn: this.state.visitTimeIn,
//       visitTimeOut: this.state.visitTimeOut,
//       selectedAlphabet: this.state.selectedAlphabet,
//       searchWord: this.state.searchWord,
//       emailparent: this.state.emailparent,
//       parentMessage: this.state.parentMessage,
//       medicineIntake: this.state.medicineIntake,
//       medicationDetails: this.state.medicationDetails,
//       studentInformation: Id,
//       physicalTest: this.state.physicalTest,
//       testDetails: this.state.testDetails,
//       note: this.state.note,
//       vitalInformation: this.state.vitalInformation,
//       contactwithparent: this.state.contactwithparent,
//       designatedemergencycontact: this.state.designatedemergencycontact,
//       visitOutcome: this.state.visitOutcome,
//       bp: this.state.bp,
//       temperature: this.state.temperature,
//       respiration: this.state.respiration,
//       o2saturation: this.state.o2saturation,
//       heartRate: this.state.heartRate,
//       otherSymptoms: this.state.otherSymptoms,
//       otherFirstAid: this.state.otherFirstAid,
//       otherCausedBy: this.state.otherCausedBy,
//       studentSymptoms: this.state.studentSymptoms,
//       studentFirstAid: this.state.studentFirstAid,
//       studentInstructionTeaching:this.state.studentInstructionTeaching,
//       studentCausedBy: this.state.studentCausedBy,
//       visitType: this.props.subItemsList && this.props.subItemsList.visittype ?this.props.subItemsList.visittype : this.state.fk_visittype,
//       visitSubItem: null,
//       deseaseName: this.state.deseaseName,
//       providerName: getUserToken().firstname + ' ' + getUserToken().lastname,
//       messageStatus: this.state.messageStatus,
//       notehome: this.state.notehome,
//       initialpresentation: this.state.initialpresentation,
//       parentcontactlist: this.state.parentcontactlist,
//       restroom: this.state.restroom,
//       assessmentHierarchy: this.state.assessmentHierarchy,
//       actiontakenHierarchy: this.state.actiontakenHierarchy
//     };
//     await this.props.dispatch(postStudentVisitList(obj));
//     this.modalHide();
//     this.setState({
//       symptomTextbox1:"",
//       symptomTextbox2:"",
//       symptomTextbox3:"",
//       symptomTextbox4:"",
//       symptomTextbox5:"",
//       symptomTextbox6:"",
//       symptomTextbox7:"",
//     })
//     if (_.isEmpty(this.props.visitLogDataError)) {
//       toast.success(this.props.visitLogData, {
//         autoClose: 5000,
//       });
//       this.setState({submitButtonDisabled: false});
//     } else {
//       toast.error('Error Occured', {
//         autoClose: 4000,
//       });
//     }
//   }
//   };
//   Validate = (x, y) => {
//     var yourImageElement = document.getElementById('imgmain');
//     var canvas = document.createElement('canvas');
//     canvas.width = yourImageElement.width;
//     canvas.height = yourImageElement.height;
//     canvas.getContext('2d').drawImage(yourImageElement, 0, 0);

//     var pixelData = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
//     if (
//       pixelData[0] === 0 &&
//       pixelData[1] === 0 &&
//       pixelData[2] === 0 &&
//       pixelData[3] === 0
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   };
//   imgClick = (e) => {
//     var ev = e;
//     // eslint-disable-next-line no-debugger

//     var ediv = ev.target;
//     var x = ev.clientX - (ediv.offsetParent.offsetLeft + ediv.offsetLeft);
//     var y = ev.pageY - (ediv.offsetParent.offsetTop + ediv.offsetTop); //ev.clientY

//     let valid = this.Validate(x, y);
//     //var $display = $div.find('.display');

//     // var offset = ediv.offset();
//     let part = '';
//     if (
//       (valid && x > 99 && x < 161 && y < 77) ||
//       (valid && x > 109 && x < 152 && y > 74 && y < 103)
//     ) {
//       let listhead = this.props.visitBodySearchList.filter(
//         (e) => e.area === 'Head'
//       );
//       if (listhead[0]) {
//         listhead[0].visittypes = _.orderBy(
//           listhead[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       let finallist = [
//         {
//           area: listhead[0].area + ' & ' + 'Neck',
//           visittypes: [...listhead[0].visittypes],
//         },
//       ];
//       this.setState({
//         ListByBodyPart: finallist,
//         showBodyList: true,
//         fullList: finallist,
//       });
//       // part="Head";
//     } else if (valid && x < 74 && y > 109 && y < 312) {
//       let list = this.props.visitBodySearchList.filter(
//         (e) => e.area === 'Hand'
//       );
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });
//       // part="Left Hand";
//     } else if (valid && x > 182 && y > 109 && y < 312) {
//       let list = this.props.visitBodySearchList.filter(
//         (e) => e.area === 'Hand'
//       );
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }
//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });
//       //  part="Right Hand";
//     } else if (valid && x > 69 && x < 127 && y > 310) {
//       let list = this.props.visitBodySearchList.filter((e) => e.area === 'Leg');
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });

//       //part="Right Leg";
//     } else if (valid && x > 129 && x < 189 && y > 310) {
//       let list = this.props.visitBodySearchList.filter((e) => e.area === 'Leg');
//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       //part="Left Leg";
//     } else if (valid && x > 78 && x < 181 && y > 104 && y < 154) {
//       let list = this.props.visitBodySearchList.filter(
//         (e) => e.area === 'Chest'
//       );
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });

//       //part="Chest";
//     } else if (valid && x > 78 && x < 180 && y > 155 && y < 258) {
//       let list = this.props.visitBodySearchList.filter(
//         (e) => e.area === 'Abdomen'
//       );
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });
//       //part="abdomen"
//     } else if (valid && x > 100 && x < 160 && y > 257 && y < 310) {
//       let list = this.props.visitBodySearchList.filter(
//         (e) => e.area === 'Pelvis'
//       );
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });
//       //part="Pelvis";
//     } else if (valid && y > 251 && y < 310 && x < 96) {
//       let list = this.props.visitBodySearchList.filter((e) => e.area === 'Leg');
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });
//       //part="Leg";
//     } else if (valid && y > 251 && y < 310 && x > 154) {
//       let list = this.props.visitBodySearchList.filter((e) => e.area === 'Leg');
//       if (list[0]) {
//         list[0].visittypes = _.orderBy(
//           list[0].visittypes,
//           'visittypename',
//           'asc'
//         );
//       }

//       this.setState({
//         ListByBodyPart: list,
//         showBodyList: true,
//       });
//       //part="Leg";
//     }

//     if (
//       (valid && x > 99 && x < 161 && y < 77) ||
//       (valid && x > 109 && x < 152 && y > 74 && y < 103)
//     ) {
//       this.setState({
//         imgLeft: 128 + 23,
//         imgRight: 30 + 40,
//       });
//     } else {
//       this.setState({
//         imgLeft: x + 23,
//         imgRight: y + 40,
//       });
//     }
//   };
//   handleDateTimeOutChange = (date, targetName = null) => {
//     if (targetName == 'visitTimeOut') {
//       if (date > this.state.visitTimeIn) {
//         this.setState({
//           visitTimeInError: '',
//         });
//         if (
//           moment(date).format('YYYY-MM-DD HH:mm') >
//           moment().format('YYYY-MM-DD HH:mm')
//         ) {
//           this.setState({
//             visitTimeOutError: 'Please select a time less than current time.',
//           });
//         } else {
//           this.setState({
//             visitTimeOutError: '',
//           });
//         }
//       } else if (date < this.state.visitTimeIn) {
//         this.setState({
//           visitTimeOutError: 'Please select a time greater than time in.',
//         });
//       } else {
//         this.setState({
//           visitTimeOutError: '',
//         });
//       }
//       this.setState({
//         visitTimeOut: date,
//       });
//     } else {
//       this.setState({
//         visitTimeIn: date,
//       });
//     }
//   };
//   handleDateTimeInChange = (date, targetName = null) => {
//     if (targetName == 'visitTimeIn') {
//       if (
//         date < this.state.visitTimeOut &&
//         moment(this.state.visitTimeOut).format('YYYY-MM-DD HH:mm') <
//         moment().format('YYYY-MM-DD HH:mm')
//       ) {
//         this.setState({
//           visitTimeOutError: '',
//           visitTimeInError: '',
//         });
//       } else if (
//         moment(date).format('YYYY-MM-DD HH:mm') >
//         moment().format('YYYY-MM-DD HH:mm') ||
//         date > this.state.visitTimeOut
//       ) {
//         this.setState({
//           visitTimeInError: 'Please select a time less than time out.',
//         });
//       } else {
//         this.setState({
//           visitTimeInError: '',
//         });
//       }
//       this.setState({
//         visitTimeIn: date,
//       });
//     } else {
//       this.setState({
//         visitTimeOut: date,
//       });
//     }
//   };
//   modalHide = (addOrHide) => {
//     this.setState({
//       uploadedFile: false,
//       fileName: '',
//       viewTemplate: false,
//       preview: false,
//       loadWithoutTemplate: false,
//       viewLog: false,
//       Modalshow: false,
//       visitTimeIn: new Date(),
//       visitTimeOut: new Date(),
//       visitTimeInError: '',
//       visitTimeOutError: '',
//       emailparent: false,
//       parentMessage: '',
//       medicineIntake: false,
//       medicationDetails: '',
//       studentInformation: '',
//       physicalTest: false,
//       testDetails: '',
//       note: '',
//       vitalInformation: false,
//       contactwithparent: false,
//       visitOutcome: 'Called 911',
//       bp: '',
//       temperature: '',
//       respiration: '',
//       o2saturation: '',
//       heartRate: '',
//       otherSymptoms: false,
//       otherFirstAid: false,
//       otherCausedBy: false,
//       studentSymptoms: [],
//       studentFirstAid: [],
//       studentInstructionTeaching :[],      
//       studentCausedBy: [],
//       noteShow: false,
//       noteCharacter: 250,
//       emailError: '',
//       editMode: '',
//       isEditable: false,
//       subItemsList: {},
//       addOrEditVisitTypes: { visitTypes: this.props.schoolVisitTypes && this.props.schoolVisitTypes.result && this.props.schoolVisitTypes.result.alphabets ? this.props.schoolVisitTypes.result.alphabets: [] },
//       initialpresentation:[],
//     });
//     if(addOrHide === "AddOrHide"){
//       alert("Cancel Add Or Hide Visit Type")
//     }

//   };
//   modalShow = () => {
//     this.setState({
//       Modalshow: true,
//     });
//   };


//   render() {
//     const { t } = this.props;
//     const attender = getUserToken().firstname + ' ' + getUserToken().lastname;
//     let Id = this.props.match.params.Id;
//     const { showBodyList, ListByBodyPart } = this.state;
//     const visitTypesSel = this.state.addOrEditVisitTypes.visitTypes && this.state.addOrEditVisitTypes.visitTypes.length ? this.state.addOrEditVisitTypes.visitTypes : { visitTypes: [] };
//     return (
//       <>
//         <div className='page dashboard-page'>
//           {/* <Navbar /> */}
//           <AdvancSearch></AdvancSearch>
//           <div className='add-new-visit'>
//             <div className='add-new-header'>
//               <h1>{t('Add New Visit')}</h1>
//               <a href={`/edu-health/student-profile/${Id}`}>
//                 <img src={close} className='close' />
//               </a>
//             </div>
//             <div className='addNew-form'>
//               <div className='letter-wise'>
//                 <ul>
//                   <li>
//                     <a
//                       className={
//                         this.state.selectedAlphabet == 'All' ? 'active' : ''
//                       }
//                       name='All'
//                       onClick={this.handleClick}
//                     >
//                       {t('All')}
//                     </a>
//                   </li>
//                   {this.mapAlphabets()}
//                 </ul>
//               </div>
//               <form className='searchForm pd-0 mt-4'>
//                 <div className='form-row w-100 m-0'>
//                   <div className='col-9 pd-0'>
//                     <input
//                       type='text'
//                       className='form-control mr-0 h-100'
//                       id='studentId'
//                       placeholder={t('Search by Visit Type')}
//                       onChange={this.handleSearch}
//                       name='searchWord'
//                     />
//                   </div>
//                   <div className='col-3 pd-0'>
//                     <button
//                       className='btn searchBtn'
//                       type='button'
//                       onClick={this.handleClickSearch}
//                     >
//                       {t('Search')}
//                     </button>
//                   </div>
//                 </div>
//               </form>
//               <div className='health-complication'>
//                 <div className='complication'>
//                   <div className='row'>
//                     {!showBodyList ? (
//                       <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0'>
//                         <h1 className='complication-header'>
//                           {t('Visit Type')}
//                         </h1>
//                         <ul className='complication-list'>
//                           {this.visitListMapping()}
//                         </ul>
//                         <div className="visit-types-hide">
//                           <a
//                             data-toggle="modal"
//                             data-target="#addOrEditVisitModal"
//                           >                            
//                             {getUserToken().role === "Head Nurse" && (
//                             <button className="btn btn-theme">
//                               {t("Add Or Hide Visit Type")}
//                            </button> )}
//                           </a>
//                         </div>
//                       </div>

//                     ) : (
//                       <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0'>
//                         <h1 className='complication-header'>
//                           {t('Visit Type')}
//                         </h1>
//                         <ul className='complication-list'>
//                           {ListByBodyPart.length > 0 &&
//                             ListByBodyPart.map((Listbypart) => (
//                               <>
//                                 <h1>{Listbypart.area}</h1>
//                                 <li>
//                                   {Listbypart.visittypes && Listbypart.visittypes.length>0 && Listbypart.visittypes.map((obj) => {
//                                     if((visitTypesSel.length && visitTypesSel.indexOf(obj.visittypename) > -1) 
//                                     || !visitTypesSel.length){
//                                       return (<p
//                                        data-toggle='modal'
//                                        data-target='#addVisitModal'
//                                        className='visits-cursor'
//                                        onClick={() =>
//                                         this.handleVisitSubItems(obj)
//                                        }
//                                       >
//                                       {obj.visittypename}
//                                      </p>
//                                     )}
//                                   })}
//                                 </li>
//                               </>
//                             ))}
//                         </ul>
//                       </div>
//                     )}
//                     <div className='col-6 d-none d-md-block'>
//                       <div className='health-image'>
//                         <p>{t('Search by Body Parts')}</p>
//                         <div>
//                           {this.state.imgLeft > 0 && this.state.imgRight > 0 && (
//                             <img
//                               src={hoverbody}
//                               alt='hover-body'
//                               style={{
//                                 left: this.state.imgLeft,
//                                 top: this.state.imgRight,
//                               }}
//                               class='circle square3'
//                             />
//                           )}
//                           <img
//                             id='imgmain'
//                             onClick={this.imgClick}
//                             src={body}
//                             alt='body'
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Modal
//           className='modal visionchekbox health-form-modal modal-fullscreen-sm 
//           modalZIndex health-view-modal medication-view-modal parent-modal single-column fade visit-modal'
//           id='addVisitModal'
//           tabIndex={-1}
//           show={this.state.Modalshow}
//           role='dialog'
//           onHide={this.modalHide}
//           aria-labelledby='visionModalLabel'
//           aria-hidden='true'
//         >
//           <div
//             className='studentVisitList visit-modal-content visits-modal-h-p'
//             role='document'
//           >
//             <div className='modal-header'>
//               <h5 className='modal-title' id='addVisitModalLabel'>
//                 {t('Add New Visit')}
//               </h5>
//               <button
//                 type='button'
//                 className='addNewVisitCloseButton btn-close'
//                 data-dismiss='modal'
//                 aria-label='Close'
//                 onClick={this.modalHide}
//               ></button>
//             </div>
//             <div className='modal-body pt-0'>
//               <div className='previousList clearfix'>
//                 <div className>
//                 {!disableInitialPrestVisitTypes.includes(this.state.deseaseName) &&
//                 <>
//                   <div className='general-details'>
//                     <p className='mb-2'>
//                       <small>
//                         <strong>{t('Initial Presentation')}</strong>
//                       </small>
//                     </p>
//                   </div>
//                   <div className="col-12 row">
//                     <div className='col-4 form-row ml-2'>
//                     <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='agitated'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Agitated')}</strong>
//                       </label>
//                     </div>

//                     <div className='col-4 form-row'>
//                     <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='crying'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Crying / Tearful')}</strong>
//                       </label>                      
//                     </div>

//                     <div className=' col-4 form-row'>
//                     <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='oriented'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Oriented')}</strong>
//                       </label>                      
//                     </div>
//                   </div>
//                   <div className="col-12 row">
//                     <div className='col-4 form-row ml-2'>
//                     <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='alert'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Alert')}</strong>
//                       </label>
//                     </div>

//                     <div className='col-4 form-row'>
//                     <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='grimacing'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Grimacing')}</strong>
//                       </label>                      
//                     </div>

//                     <div className=' col-4 form-row'>
//                       <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='smiling'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Smiling')}</strong>
//                       </label>
//                     </div>
//                   </div>
//                   <div className="col-12 row">
//                     <div className='col-4 form-row ml-2'>
//                     <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='assisted'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Assisted')}</strong>
//                       </label>
//                     </div>

//                     <div className='col-4 form-row'>
//                     <input
//                       className='form-check-input p-0'
//                       type='checkbox'
//                       defaultValue
//                       id='initialpresentation'
//                       name='guarded'
//                       onChange={this.handleChange}
//                     />
//                     <label className='visits-vital-label'>
//                       <strong>{t('Guarded')}</strong>
//                     </label>
//                     </div>                    
//                   </div>                  
//                   <div className="col-12 row">
//                     <div className='col-4 form-row ml-2'>
//                     <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='calm'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Calm')}</strong>
//                       </label>
//                     </div>

//                     <div className='col-4 form-row'>
//                     <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='independent'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Independent')}</strong>
//                       </label>
//                     </div>
//                  </div>
//                   {enableInitialPrestVisitTypes.includes(this.state.deseaseName) &&
//                     <div className=' col-4 form-row ml-2'>
//                     <input
//                       className='form-check-input p-0'
//                       type='checkbox'
//                       defaultValue
//                       id='initialpresentation'
//                       name='other'
//                       onChange={this.handleChange}
//                     />
//                     <label className='visits-vital-label'>
//                       <strong>{t('Other')}</strong>
//                     </label>

//                     </div>
//                   }
//                   {["Eye Concerns"].includes(this.state.deseaseName) &&
//                     <div className=' col-4 form-row ml-2'>
//                       <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='rubbingeyes'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Student rubbing eyes upon arrival')}</strong>
//                       </label>
//                     </div>
//                   }
//                   {["Restroom Use"].includes(this.state.deseaseName) &&
//                     <>
//                     <div className=' col-12 form-row ml-2'>
//                       <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='restroomindependently'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Student used restroom in the health office independently')}</strong>
//                       </label>
//                     </div>
//                     <div className=' col-12 form-row ml-2'>
//                       <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='restroomhelpwithteacher'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Student used the restroom in the health office with help from paraprofessional/teacher')}</strong>
//                       </label>
//                     </div>
//                     <div className=' col-12 form-row ml-2'>
//                       <input
//                         className='form-check-input p-0'
//                         type='checkbox'
//                         defaultValue
//                         id='initialpresentation'
//                         name='washedhands'
//                         onChange={this.handleChange}
//                       />
//                       <label className='visits-vital-label'>
//                         <strong>{t('Student washed hands with soap and water')}</strong>
//                       </label>
//                     </div>
//                     </>
//                   }
//                   </>
//                 }
//                   <div>
//                     <div className='scan-list'>
//                       <div className='row visits-mt-ten ml-mb-visit'>
//                         <div className='col-12 ml-3'>
//                           <div className='form-row'>
//                             <input
//                               className='form-check-input p-0'
//                               type='checkbox'
//                               defaultValue
//                               id='checkbox1'
//                               name='vitalInformation'
//                               onChange={this.handleChange}
//                             />
//                             <label className='visits-vital-label'>
//                               <strong>{t('Vital Information')}</strong>
//                             </label>
//                           </div>
//                         </div>
//                         {this.state.vitalInformation && (
//                           <>
//                             <div className='col-4 mt-3'>
//                               <div className='form-row'>
//                                 <label>
//                                   <strong>{t('Blood Pressure(mmHG)')}</strong>
//                                 </label>
//                                 <input
//                                   type='text'
//                                   className='form-control mr-0'
//                                   id= 'bloodpressure'
//                                   placeholder
//                                   name='bp'
//                                   value={this.state.bp}
//                                   onChange={this.handleChange}
//                                 />
//                                 {/* <p className="text-muted">
//                               <small>mmHG</small>
//                             </p> */}
//                               </div>
//                             </div>
//                             <div className='col-4 mt-3'>
//                               <div className='form-row'>
//                                 <label>
//                                   <strong>{t('Temperature(F)')}</strong>
//                                 </label>
//                                 <input
//                                   type='number'
//                                   className='form-control mr-0'
//                                   id
//                                   placeholder
//                                   name='temperature'
//                                   value={this.state.temperature}
//                                   onChange={this.handleChange}
//                                 />
//                                 {/* <p className="text-muted">
//                               <small>F</small>
//                             </p> */}
//                               </div>
//                             </div>
//                             <div className='col-4 mt-3'>
//                               <div className='form-row'>
//                                 <label>
//                                   <strong>{t('Heart Rate(Minute)')}</strong>
//                                 </label>
//                                 <input
//                                   type='number'
//                                   className='form-control mr-0'
//                                   id
//                                   placeholder
//                                   name='heartRate'
//                                   value={this.state.heartRate}
//                                   onChange={this.handleChange}
//                                 />
//                                 {/* <p className="text-muted">
//                               <small>Minute</small>
//                             </p> */}
//                               </div>
//                             </div>
//                             <div className='col-4'>
//                               <div className='w-70'>
//                                 <div className='form-row visits-respirstion-w'>
//                                   <label>
//                                     <strong>
//                                       {t('Respiration Rate(Minute)')}
//                                     </strong>
//                                   </label>
//                                   <input
//                                     type='number'
//                                     className='form-control mr-0'
//                                     id
//                                     placeholder
//                                     name='respiration'
//                                     value={this.state.respiration}
//                                     onChange={this.handleChange}
//                                   />
//                                   {/* <p className="text-muted">
//                                 <small>Minute</small>
//                               </p> */}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className='col-4'>
//                               <div className='w-70'>
//                                 <div className='form-row visits-respirstion-w'>
//                                   <label>
//                                     <strong>{t('O2Saturation Level (%)')}</strong>
//                                   </label>
//                                   <input
//                                     type='number'
//                                     className='form-control mr-0'
//                                     id
//                                     placeholder
//                                     name='o2saturation'
//                                     value={this.state.o2saturation}
//                                     onChange={this.handleChange}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className='general-details'>
//                     <p className='mb-2'>
//                       <small>
//                         <strong>{t('General Details')}</strong>
//                       </small>
//                     </p>
//                     <div className='d-flex'>
//                       <div className='visits-pr-thirty'>
//                         <p className='text-muted mb-1'>
//                           <small>{t('Visit Reason')}</small>
//                         </p>
//                         <p className='mb-2'>
//                           <small>{this.state.deseaseName}</small>
//                         </p>
//                       </div>
//                       <div>
//                         <p className='text-muted mb-1'>
//                           <small>{t('Providers Name')}</small>
//                         </p>
//                         <p className='mb-2'>
//                           <small>{attender}</small>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='form-inputs clearfix mb-3'>
//                     <div className='mb-3 form-inpit-div visits-pr-ten'>
//                       <label
//                         htmlFor='datepickerTimein'
//                         className='form-label mb-1 fontSizeVisit visit-font-lable'
//                       >
//                         <p className='visit-fs-thirteen'>
//                           {t('Time in')}
//                           <span class='asterisk'>*</span>
//                         </p>
//                       </label>
//                       <div className='pos-relative'>
//                         <DatePicker
//                           id='datepickerTimein'
//                           className='form-control datepicker visit-datepickers visit-img-clock'
//                           selected={this.state.visitTimeIn}
//                           onChange={(e) => {
//                             this.handleDateTimeInChange(e, 'visitTimeIn');
//                           }}
//                           showTimeInput
//                           maxDate={new Date()}
//                           timeIntervals={1}
//                           timeCaption='time'
//                           timeFormat='HH:mm'
//                           dateFormat='dd MMM, yyyy h:mm aa'
//                         />
//                       </div>
//                       <span className='visite-redcolor'>
//                         {this.state.visitTimeInError}
//                       </span>
//                     </div>
//                     <div className='mb-3 form-inpit-div visits-pr-ten'>
//                       <label
//                         htmlFor='datepickerTimeout'
//                         className='form-label mb-1 fontSizeVisit visit-font-lable'
//                       >
//                         <p className='visit-fs-thirteen'>
//                           {t('Time Out')}
//                           <span class='asterisk'>*</span>
//                         </p>
//                       </label>
//                       <div className='pos-relative'>
//                         <DatePicker
//                           id='datepickerTimeout'
//                           className='form-control datepicker visit-datepickers visit-img-clock'
//                           selected={this.state.visitTimeOut}
//                           onChange={(e) => {
//                             this.handleDateTimeOutChange(e, 'visitTimeOut');
//                           }}
//                           timeIntervals={1}
//                           showTimeInput
//                           minDate={this.state.visitTimeIn}
//                           minTime={this.state.currentTimedata}
//                           timeCaption='time'
//                           timeFormat='HH:mm'
//                           dateFormat=' dd MMM, yyyy h:mm aa'
//                         />
//                       </div>
//                       <span className='visite-redcolor'>
//                         {this.state.visitTimeOutError}
//                       </span>
//                     </div>

//                     <div className='mb-2 wid-100 form-inpit-div visits-pr-ten'></div>
//                     <div className='mb-2 form-inpit-div visit-time-plpr'></div>
//                   </div>
//                   <div className='mb-3 days-check-div w-100 visits-pr-zero'>
//                   <div className='form-check checkbox-check w-49 d-inline-block h-20'>
//                       <div className='add-contact-with-parent-checkbox'>
//                         <input
//                           className='p-0-contact'
//                           type='checkbox'
//                           defaultValue
//                           id='checkbox2'
//                           name='contactwithparent'
//                           onChange={this.handleChange}
//                         />
//                         <label
//                           className='form-check-label tick-box fontSizeVisit-contact'
//                           htmlFor='checkbox2'
//                         >
//                           {t('Contact with parent')}
//                         </label>
//                       </div>
//                     </div>  
//                     <div className='form-check checkbox-check w-49 d-inline-block h-20'>
//                       <div className='add-contact-with-parent-checkbox'>
//                         <input
//                           className='p-0-contact'
//                           type='checkbox'
//                           defaultValue
//                           id='checkbox3'
//                           name='notehome'
//                           onChange={this.handleChange}
//                         />
//                         <label
//                           className='form-check-label tick-box fontSizeVisit-contact'
//                           htmlFor='checkbox3'
//                         >
//                           {t('Note Home')}
//                         </label>
//                       </div>
//                     </div>
//                     {enableInitialPrestVisitTypes.includes(this.state.deseaseName) &&
//                       <div className='form-check checkbox-check w-49 d-inline-block h-20 '>
//                         <div className='add-contact-with-parent-checkbox'>
//                           <input
//                             className='p-0-contact'
//                             type='checkbox'
//                             defaultValue
//                             id='checkbox3'
//                             name='designatedemergencycontact'
//                             onChange={this.handleChange}
//                           />
//                           <label
//                             className='form-check-label tick-box fontSizeVisit-contact'
//                             htmlFor='checkbox3'
//                           >
//                             {t('Designated Emergency Contact')}
//                           </label>
//                         </div>
//                       </div>
//                     }
//                      <div className='form-check checkbox-check w-49 d-inline-block h-20'>
//                       <div className='add-contact-with-parent-checkbox'>
//                         <input
//                           className='p-0'
//                           type='checkbox'
//                           defaultValue
//                           id='checkbox1'
//                           name='emailparent'
//                           onChange={this.handleChange}
//                           disabled={this.state.isContainParentsDetails}
//                         />
//                         <label
//                           data-for='parentemail._id'
//                           data-tip={this.state.reason}
//                           className='form-check-label tick-box fontSizeVisit-email'
//                           // htmlFor='checkbox1'
//                         >
//                           {t('Notify parent by email')}
//                         </label>
//                         <ReactTooltip
//                           id='parentemail._id'
//                           html={true}
//                           multiline={true}
//                         >
//                           {this.state.reason}
//                         </ReactTooltip>
//                       </div>
//                     </div>
//                     {this.state.emailparent && (
//                       <div className='form-row pt-2 pl-1'>
//                         <label>
//                           <strong>{t('Parent notification message')}</strong>
//                         </label>
//                         <input
//                           type='text'
//                           className='form-control mr-0 w-99'
//                           id
//                           placeholder={t('Please provide notification message')}
//                           name='parentMessage'
//                           value={this.state.parentMessage}
//                           onChange={this.handleChange}
//                         />
//                       </div>
//                     )}
//                     {this.state.preview == true &&
//                       !_.isEmpty(this.props.studentVisitEmailTemplate) ? (
//                       <button
//                         type='button'
//                         data-dismiss='modal'
//                         className='btn  visit-preview background-color'
//                         onClick={this.viewTemplate}
//                       >
//                         {this.state.viewTemplate == true ? 'Close' : 'Preview'}
//                       </button>
//                     ) : (
//                       <></>
//                     )}
//                     {this.state.viewTemplate == true && (
//                       <>
//                         {!_.isEmpty(this.props.studentVisitEmailTemplate) ? (
//                           <>
//                             <div className='form-main clearfix'>
//                               <div class='modal-form-division preview-container-width'>
//                                 <div className='container-fluid'>
//                                   <div
//                                     // className="health-form-modal"
//                                     id='visionModal'
//                                     tabIndex={-1}
//                                     role='dialog'
//                                     aria-labelledby='visionModalLabel'
//                                     aria-hidden='true'
//                                   >
//                                     {!_.isEmpty(
//                                       this.props.studentVisitEmailTemplate
//                                     ) ? (
//                                       <div
//                                         dangerouslySetInnerHTML={{
//                                           __html:
//                                             this.props.studentVisitEmailTemplate
//                                               .email[0].messagebody,
//                                         }}
//                                       ></div>
//                                     ) : null}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </>
//                         ) : null}
//                       </>
//                     )}
//                   </div>

//                   {/* </div> */}
//                   <div className='row'>
//                     <div className='col-12 mt-12'>
//                       <div className='mb-3'>
//                         <div className='scan-list mb-2'></div>
//                         <p class='mb-2'>
//                           <small>
//                             <strong>{t('Medication Details')}</strong>
//                           </small>
//                         </p>
//                         <p className='mb-1'>
//                           <small className='visit-fs-thirteen'>
//                             {t('Medicine Intake')}
//                           </small>
//                         </p>
//                         <div className='form-check radio-check d-inline-block visits-mr-twenty visits-mr-twenty'>
//                           <input
//                             className='form-check-input visits-mt-h '
//                             type='radio'
//                             name='medicineIntake'
//                             id='notgivenRadio'
//                             value={false}
//                             onChange={this.handleChange}
//                             defaultChecked='checked'
//                           />
//                            <input
//                             className='form-check-input visits-mt-h '
//                             type='radio'
//                             name='medicineIntake'
//                             id='notgivenRadio'
//                             value={false}
//                             // onChange={this.handleChange}
//                             defaultChecked='checked'
//                           />
//                           <label
//                             className='form-check-label fontSizeVisit visit-lable-color'
//                             htmlFor='notgivenRadio'
//                           >
//                             {t('Not Given')}
//                           </label>
//                         </div>
//                         <div className='form-check radio-check d-inline-block'>
//                           <input
//                             className='form-check-input visits-mt-h'
//                             type='radio'
//                             name='medicineIntake'
//                             id='givenRadio'
//                             value={true}
//                             onChange={this.handleChange}
//                           />
//                           <label
//                             className='form-check-label fontSizeVisit visit-lable-color'
//                             htmlFor='givenRadio'
//                           >
//                             {t('Given/See MAR')}
//                           </label>
//                         </div>
//                       </div>
//                       {this.state.medicineIntake == 'true' && (
//                         <div className='form-row pt-2 pl-1'>
//                           <label>
//                             <strong>{t('Medication Details')}</strong>
//                           </label>
//                           <input
//                             type='text'
//                             className='form-control mr-0'
//                             id
//                             placeholder={t(
//                               'please provide the medication details'
//                             )}
//                             name='medicationDetails'
//                             value={this.state.medicationDetails}
//                             onChange={this.handleChange}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div className='row'>
//                     <div className='col-12 mt-12'>
//                       <div className='mb-3'>
//                         <p className='mb-1'>
//                           <small className='visit-fs-thirteen'>
//                             {t('Physical Test')}
//                           </small>
//                         </p>
//                         <div className='form-check radio-check d-inline-block visits-mr-twenty'>
//                           <input
//                             className='form-check-input visits-mt-h'
//                             type='radio'
//                             name='physicalTest'
//                             id='normalRadio'
//                             value={false}
//                             onChange={this.handleChange}
//                             defaultChecked='checked'
//                           />
//                           <label
//                             className='form-check-label fontSizeVisit visit-lable-color'
//                             htmlFor='normalRadio'
//                           >
//                             {t('Normal')}
//                           </label>
//                         </div>
//                         <div className='form-check radio-check d-inline-block visits-physical-hmrmt'>
//                           <input
//                             className='form-check-input visits-mt-h'
//                             type='radio'
//                             name='physicalTest'
//                             id='notnormalRadio'
//                             value={true}
//                             onChange={this.handleChange}
//                           />
//                           <label
//                             className='form-check-label ml-3 fontSizeVisit visit-lable-color'
//                             htmlFor='notnormalRadio'
//                           >
//                             {t('Not Normal')}
//                           </label>
//                         </div>
//                       </div>
//                       {this.state.physicalTest == 'true' && (
//                         <div className='form-row pt-2 pl-1'>
//                           <label>
//                             <strong>{t('Test Details')}</strong>
//                           </label>
//                           <input
//                             type='text'
//                             className='form-control mr-0'
//                             id
//                             placeholder={t('Please Provide Test Details')}
//                             name='testDetails'
//                             onChange={this.handleChange}
//                             value={this.state.testDetails}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   {this.state.deseaseName == "Parent Contact" &&
//                     <>
//                       <div className='general-details'>
//                         <p className='mb-2'>
//                           <small>
//                             <strong>{t('Parent Contact')}</strong>
//                           </small>
//                         </p>
//                       </div>
//                       <div className="col-12 row">
//                         <div className='col-4 form-row ml-2'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='parentcontactlist'
//                             name='Immunisations'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Immunizations')}</strong>
//                           </label>
//                         </div>

//                         <div className='col-4 form-row'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='parentcontactlist'
//                             name='Medications'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Medications')}</strong>
//                           </label>
//                         </div>

//                         <div className=' col-4 form-row'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='parentcontactlist'
//                             name='Treatement'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Treatment')}</strong>
//                           </label>
//                         </div>
//                       </div>
//                       <div className="col-12 row">
//                         <div className='col-4 form-row ml-2'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='parentcontactlist'
//                             name='StudentSupplies'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Student Supplies')}</strong>
//                           </label>
//                         </div>

//                         <div className='col-4 form-row'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='parentcontactlist'
//                             name='OfficeVisit'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Office Visit')}</strong>
//                           </label>
//                         </div>

//                         <div className=' col-4 form-row'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='parentcontactlist'
//                             name='StudentHealthCondition'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Student Health Condition')}</strong>
//                           </label>
//                         </div>
//                       </div>
//                       <div className="col-12 row">
//                         <div className='col-4 form-row ml-2'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='parentcontactlist'
//                             name='StudentBehavior'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Student Behavior')}</strong>
//                           </label>
//                         </div>

//                         <div className='col-4 form-row'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='parentcontactlist'
//                             name='Others'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Others')}</strong>
//                           </label>
//                         </div>
//                       </div>
//                     </>
//                   }
//                   {/* {this.state.deseaseName == "Restroom Use" &&
//                     <>
//                       <div className='general-details'>
//                         <p className='mb-2'>
//                           <small>
//                             <strong>{t('Restroom Use')}</strong>
//                           </small>
//                         </p>
//                       </div>
//                       <div className="col-12 row">
//                         <div className='col-6 form-row ml-2'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='restroom'
//                             name='StudentUseRestroom'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Student Use Restroom In Health Office')}</strong>
//                           </label>
//                         </div>

//                         <div className='col-6 form-row'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='restroom'
//                             name='RestRoomIndependently'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Student Used Rest Room Independently')}</strong>
//                           </label>
//                         </div>


//                       </div>
//                       <div className="col-12 row">
//                         <div className='col-6 form-row ml-2'>
//                           <input
//                             className='form-check-input p-0'
//                             type='checkbox'
//                             defaultValue
//                             id='restroom'
//                             name='WashedHandsWithSoap'
//                             onChange={this.handleChange}
//                           />
//                           <label className='visits-vital-label'>
//                             <strong>{t('Washed Hands With Soap And Water')}</strong>
//                           </label>
//                         </div>
//                       </div>
//                     </>
//                   } */}
//                   <div className='row'>
//                     <div className='col-12 mt-12'>
//                       <div className='mb-2 mt-2 wid-100 form-inpit-div visits-pr-ten'>
//                         <label htmlFor='desc' className='form-label mb-1'>
//                           <p className='p-note-class'>{t('Notes')}</p>
//                         </label>
//                         <textarea
//                           maxlength='250'
//                           className='form-control visits-textarea-h'
//                           id='desc'
//                           name='note'
//                           defaultValue={''}
//                           onChange={this.handleChange}
//                           autoFocus={this.state.noteShow == false}
//                           onMouseLeave={() =>
//                             this.setState({
//                               noteShow: false,
//                             })
//                           }
//                         />
//                         {this.state.noteShow == true && (
//                           <p className='f-13'>
//                             <small>
//                               {this.state.noteCharacter} {t('Characters Left')}
//                             </small>
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <div className='clearfix'>
//                     <div className='row'>
//                       <div className='col-12 mt-12'>
//                         <label className='visit-fs-thirteen'>
//                           <strong>{t('Visit Outcome')}</strong>
//                         </label>
//                       </div>
//                       <div className='col-3 ml-4 mt-3'>
//                         <div className='form-row'>
//                         <input
//                             className='form-check-input visits-h-mt'
//                             type='radio'
//                             name='visitOutcome'
//                             id='CalledvisitOutcome'
//                             defaultChecked='checked'
//                             value='Called 911'
//                             onChange={this.handleChange}
//                           />
//                           <label
//                             className='form-check-label visit-lable-color'
//                             htmlFor='CalledvisitOutcome'
//                           >
//                             {t('Called 911')}
//                           </label>
//                         </div>
//                       </div>
//                       <div className='col-3 ml-4 mt-3'>
//                         <div className='form-row'>
//                         <input
//                             className='form-check-input visits-h-mt'
//                             type='radio'
//                             name='visitOutcome'
//                             id='ParentvisitOutcome'
//                             value='Sent Home with Parent'
//                             onChange={this.handleChange}
//                           />
//                           <label
//                             className='form-check-label visit-lable-color'
//                             htmlFor='ParentvisitOutcome'
//                           >
//                             {t('Home per Guardian')}
//                           </label>
//                         </div>
//                       </div>
//                       <div className='col-3 ml-4 mt-3'>
//                         <div className='form-row'>
//                         <input
//                             className='form-check-input visits-h-mt'
//                             type='radio'
//                             name='visitOutcome'
//                             id='SentvisitOutcome'
//                             value='Sent Home'
//                             onChange={this.handleChange}
//                           />
//                           <label
//                             className='form-check-label visit-lable-color'
//                             htmlFor='SentvisitOutcome'
//                           >
//                             {t('Sent Home')}
//                           </label> 
//                         </div>
//                       </div>
//                       <div className='col-3 ml-4 mt-3'>
//                         <div className='form-row'>
//                         <input
//                             className='form-check-input visits-h-mt'
//                             type='radio'
//                             name='visitOutcome'
//                             id='documentation'
//                             value='documentation'
//                             onChange={this.handleChange}
//                           />
//                           <label
//                             className='form-check-label visit-lable-color'
//                             htmlFor='documentation'
//                           >
//                             {t('Documentation')}
//                           </label>
//                         </div>
//                       </div>
//                       <div className='col-3 ml-4 mt-3'>
//                         <div className='form-row'>
//                         <input
//                             className='form-check-input visits-h-mt'
//                             type='radio'
//                             name='visitOutcome'
//                             id='ReturnvisitOutcome'                           
//                             value='Return to class'
//                             onChange={this.handleChange}
//                           />
//                           <label
//                             className='form-check-label visit-lable-color'
//                             htmlFor='ReturnvisitOutcome'
//                           >
//                             {t('Return to class')}
//                           </label> 
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='scan-list'>
//                     <div className='col-12 mt-16'>
//                       <div className='form-row'>
//                         <div className='form-row-symptoms'>
//                           <div className='form-label-edit'>
//                             <label>
//                               <strong>{t('Assessment')}</strong>
//                             </label>
//                             <div className='form-label-edit-wrapper'>
//                               <div
//                                 className='form-edit-done'
//                                 onClick={() =>
//                                   this.setState({
//                                     isEditable: true,
//                                     editMode: 'symptoms',
//                                   })
//                                 }
//                               >
//                                 {this.state.editMode === 'symptoms' &&
//                                   this.state.isEditable ? (
//                                   'Done'
//                                 ) : (
//                                   // <img src={edit} alt='' />   
//                                   []
//                                 )}
//                               </div>

//                               {this.state.editMode === 'symptoms' &&
//                                 this.state.isEditable && (
//                                   <div
//                                     className='form-edit-cancel'
                                    
//                                     onClick={() =>
//                                       this.setState({
//                                         subItemsList: this.props.subItemsList,
//                                       })

//                                     }
                                    
//                                   >
//                                     Cancel
//                                   </div>
//                                 )}
//                             </div>
//                           </div>
//                           <div className='mb-3 form-inpit-div days-check-div w-100 visits-pr-zero'>
//                           {this.subItemsSymptomsMapping()}   
//                             <div className='form-check checkbox-check w-100 d-inline-block'>
//                               <input
//                                 className='form-check-input p-0'
//                                 type='checkbox'
//                                 defaultValue
//                                 id='checkbox1'
//                                 name='otherSymptoms'
//                                 onChange={this.handleChangeSymptoms}
//                               />
//                               <label
//                                 className='form-check-label tick-box'
//                                 className='label-symptms'
//                                 // htmlFor='checkbox1'
//                               >
//                                 {t('Other')}
//                               </label>
//                               {this.state.otherSymptoms && (
//                                 <div className='form-row pt-2 pl-1'>
//                                   <label>
//                                     <strong>{t('Other Assessment')}</strong>
//                                   </label>
//                                   <input
//                                     type='text'
//                                     maxlength='250'
//                                     className='form-control mr-0'
//                                     id
//                                     placeholder={t('Please add Assessment')}
//                                     name='otherSymptomsDetails'
//                                     onChange={this.handleChangeSymptoms}
//                                     onMouseLeave={() =>
//                                       this.setState({
//                                         otherSymptomsShow: false,
//                                       })
//                                     }
//                                   />
//                                   {this.state.otherSymptomsShow == true && (
//                                     <p className='f-13'>
//                                       <small>
//                                         {this.state.textCharacter}{' '}
//                                         {t('Characters Left')}
//                                       </small>
//                                     </p>
//                                   )}
//                                 </div>
//                               )}
//                             </div>

//                             <div className='form-check checkbox-check w-100 d-inline-block lasttextbox'>
                                                       
//                               <div className="form-row"> 
//                                   <div className= "col-6 mt-16"  >                     
//                                 {this.state.lastereportvisitName === "Vomiting" &&                       
//                                 <div > <div className='form-check checkbox-check w-100 d-inline-block'>
//                                 <label
//                                 className='form-check-label tick-box'
//                                 className='label-symptms lastranklabel'>
//                                 {t('Last reported BM')}
//                                 </label>
//                                 <input
//                                 className='form-check-input p-0 lastrank'
//                                 type='textbox'
//                                 id='checkbox1'
//                                 name='Last reported BM'
//                                 onChange={this.handleChangeTextBoxSymptoms}
//                                 />
//                                 </div>
//                                 </div>
//                                 }
//                                 </div>
//                           <div className= "col-6 mt-16"  > 

//                                 {this.state.lastereportvisitName === "Vomiting" && 
//                                 <div>
//                                 <div className='form-check checkbox-check w-100 d-inline-block'>
//                                 <label
//                                   className='form-check-label tick-box'
//                                   className='label-symptms lastranklabel'>
//                                   {t('Last ate/ drank')}
//                                 </label>
//                                 <input
//                                   className='form-check-input p-0 lastrank'
//                                   type='textbox'
//                                   id='checkbox2'
//                                   name='Last ate drank'
//                                   onChange={this.handleChangeTextBoxSymptoms}
//                                 />
//                                 </div>
//                                 </div>
//                                 }
//                           </div>
//                           </div>
//                           <div className="form-row">
//                               <div className= "col-6 mt-16"  >                     
//                                 {this.state.lastereportvisitName === "Nosebleed" &&                       
//                                 <div > <div className='form-check checkbox-check w-100 d-inline-block'>
//                                 <label
//                                 className='form-check-label tick-box'
//                                 className='label-symptms lastranklabel'>
//                                 {t('Time bleeding began')}
//                                 </label>
//                                 <input
//                                 className='form-check-input p-0 lastrank'
//                                 type='textbox'
//                                 id='checkbox1'
//                                 name='Time bleeding began'
//                                 onChange={this.handleChangeTextBoxSymptoms}
//                                 />
//                                 </div>
//                                 </div>
//                                 }
//                               </div>
                            
//                           </div>                          
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   { 
//                     showTreeHierarchy(this.state.deseaseName, "assessment") &&
//                     <TreeHierarchy 
//                       handleDataChangedChecked = {this.handleDataChangedChecked} 
//                       handleDataChangedExpanded = {this.handleDataChangedExpanded} 
//                       hierarchyValue={getAssessmentNodes(this.state.deseaseName)}
//                     />
//                   }
//                   <div className='scan-list'>
//                     <div className='col-12 mt-16'>
//                       <div className='form-row'>
//                         <div className='form-row-symptoms'>
//                           <div className='form-label-edit'>
//                             <label>
//                               <strong>{t('Action Taken')}</strong>
//                             </label>
//                             <div className='form-label-edit-wrapper'>
//                               <div
//                                 className='form-edit-done'
//                                 onClick={() =>
//                                   this.setState({
//                                     isEditable: true,
//                                     editMode: 'firstaid',
//                                   })
//                                 }
//                               >
//                                 {this.state.editMode === 'firstaid' &&
//                                   this.state.isEditable ? (
//                                   'Done'
//                                 ) : (
//                                   // <img src={edit} alt='' />
//                                   []
//                                 )}
//                               </div>

//                               {this.state.editMode === 'firstaid' &&
//                                 this.state.isEditable && (
//                                   <div
//                                     className='form-edit-cancel'
//                                     onClick={() =>
//                                       this.setState({
//                                         subItemsList: this.props.subItemsList,
//                                       })
//                                     }
//                                   >
//                                     Cancel
//                                   </div>
//                                 )}
//                             </div>
//                           </div>
//                           <div className='mb-3 form-inpit-div days-check-div w-100 visits-pr-zero'>
//                             {this.subItemsFirstAidMapping()}

//                             <div className='form-check checkbox-check w-30 d-inline-block'>
//                               <input
//                                 className='form-check-input p-0'
//                                 type='checkbox'
//                                 defaultValue
//                                 id='checkbox1'
//                                 name='otherFirstAid'
//                                 onChange={this.handleChangeFirstAid}
//                               />
//                               <label
//                                 className='form-check-label tick-box'
//                                 className='first-aid-label'
//                                 // htmlFor='checkbox1'
//                               >
//                                 {t('Other')}
//                               </label>
//                             </div>
//                             {this.state.otherFirstAid && (
//                               <div className='form-row pt-2 pl-1'>
//                                 <label>
//                                   <strong>{t('Other Action Taken')}</strong>
//                                 </label>
//                                 <input
//                                   type='text'
//                                   maxlength='250'
//                                   className='form-control mr-0 visit-grey-others'
//                                   id
//                                   placeholder={t('Please add Action Taken')}
//                                   name='otherFirstAidDetails'
//                                   value={this.state.otherFirstAidDetails}
//                                   onChange={this.handleChangeFirstAid}
//                                   onMouseLeave={() =>
//                                     this.setState({
//                                       otherFirstAidShow: false,
//                                     })
//                                   }
//                                 />
//                                 {this.state.otherFirstAidShow == true && (
//                                   <p className='f-13'>
//                                     <small>
//                                       {this.state.textFirstAidCharacter}{' '}
//                                       {t('Characters Left')}
//                                     </small>
//                                   </p>
//                                 )}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>      

//                   { 
//                     showTreeHierarchy(this.state.deseaseName, "action") &&
//                     <TreeHierarchy 
//                       handleDataChangedChecked = {this.handleactiontakenChangedChecked} 
//                       handleDataChangedExpanded = {this.handleactiontakenChangedExpanded} 
//                       hierarchyValue={getActiontakenNodes(this.state.deseaseName)}
//                     />
//                   }

// {(this.state.lastereportvisitName === "Pregnancy Complications"  || this.state.lastereportvisitName ==="Respiratory") &&   
//         <div className='scan-list'>
//                             <div className='col-12 mt-16'>
//                               <div className='form-row'>
//                                 <div className='form-row-symptoms'>
//                                   <div className='form-label-edit'>
//                                     <label>
//                                       <strong>{t('Instruction/ Teaching')}</strong>
//                                     </label>
//                                     <div className='form-label-edit-wrapper'>
//                                       <div
//                                         className='form-edit-done'
//                                         onClick={() =>
//                                           this.setState({
//                                             isEditable: true,
//                                             editMode: 'instructionteaching',
//                                           })
//                                         }
//                                       >
//                                         {this.state.editMode === 'instructionteaching' &&
//                                           this.state.isEditable ? (
//                                           'Done'
//                                         ) : (
//                                           // <img src={edit} alt='' />
//                                           []
//                                         )}
//                                       </div>

//                                       {this.state.editMode === 'instructionteaching' &&
//                                         this.state.isEditable && (
//                                           <div
//                                             className='form-edit-cancel'
//                                             onClick={() =>
//                                               this.setState({
//                                                 subItemsList: this.props.subItemsList,
//                                               })
//                                             }
//                                           >
//                                             Cancel
//                                           </div>
//                                         )}
//                                     </div>
//                                   </div>
//                                   <div className='mb-3 form-inpit-div days-check-div w-100 visits-pr-zero'>
//                                     {this.subItemsInstructionTeachingMapping()}
                                  
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           }       

//                   <div className='scan-list'>
//                     <div className='col-12 mt-16'>
//                       <div className='form-row'>
//                         <div className='form-row-symptoms'>
//                           <div className='form-label-edit'>
//                             <label>
//                               <strong>{t('Caused By')}</strong>
//                             </label>
//                             <div className='form-label-edit-wrapper'>
//                               <div
//                                 className='form-edit-done'
//                                 onClick={() =>
//                                   this.setState({
//                                     isEditable: true,
//                                     editMode: 'causedby',
//                                   })
//                                 }
//                               >
//                                 {this.state.editMode === 'causedby' &&
//                                   this.state.isEditable ? (
//                                   'Done'
//                                 ) : (
//                                   // <img src={edit} alt='' />
//                                   []
//                                 )}
//                               </div>

//                               {this.state.editMode === 'causedby' &&
//                                 this.state.isEditable && (
//                                   <div
//                                     className='form-edit-cancel'
//                                     onClick={() =>
//                                       this.setState({
//                                         subItemsList: this.props.subItemsList,
//                                       })
//                                     }
//                                   >
//                                     Cancel
//                                   </div>
//                                 )}
//                             </div>
//                           </div>
//                           <div className='mb-3 form-inpit-div days-check-div w-100 visits-pr-zero'>
//                             {this.subItemsCausedByMapping()}

//                             <div className='form-check checkbox-check w-49 d-inline-block'>
//                               <input
//                                 className='form-check-input p-0'
//                                 type='checkbox'
//                                 defaultValue
//                                 id='checkbox1'
//                                 name='otherCausedBy'
//                                 onChange={this.handleChangeCaused}
//                               />
//                               <label
//                                 className='form-check-label tick-box'
//                                 // htmlFor='checkbox1'
//                               >
//                                 {t('Other')}
//                               </label>
//                             </div>

//                             {this.state.otherCausedBy && (
//                               <div className='form-row pt-2 pl-1'>
//                                 <label>
//                                   <strong>{t('Other Caused By')}</strong>
//                                 </label>
//                                 <input
//                                   type='text'
//                                   maxlength='250'
//                                   className='form-control mr-0'
//                                   id
//                                   placeholder={t('Please add the cause')}
//                                   name='otherCausedByDetails'
//                                   onChange={this.handleChangeCaused}
//                                   onMouseLeave={() =>
//                                     this.setState({
//                                       otherCausedShow: false,
//                                     })
//                                   }
//                                 />
//                                 {this.state.otherCausedShow == true && (
//                                   <p className='f-13'>
//                                     <small>
//                                       {this.state.textcaused}{' '}
//                                       {t('Characters Left')}
//                                     </small>
//                                   </p>
//                                 )}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='form-inputs clearfix'>
//                     <div className='mb-2 mt-4 form-inpit-div pr-0'>
//                       <div class='upload-btn-wrapper upload-with-icon w-100'>
//                         <button class='btn'>
//                           <img src={folder} alt='upload' />{' '}
//                           <a class='fileName-vision'>
//                             {' '}
//                             {this.state.fileName &&
//                               this.state.updateFormFileUploadFlag === false
//                               ? this.state.fileName.slice(0, 20) + '...'
//                               : 'Drag your file here or  BROWSE'}{' '}
//                             {this.state.fileSize
//                               ? this.state.fileSize && (
//                                 <ReactTooltip
//                                   id='FileSizeIds'
//                                   className='reactToolTip'
//                                 >
//                                   {this.state.fileName &&
//                                     this.state.updateFormFileUploadFlag == false
//                                     ? this.state.fileName
//                                     : 'Drag your file here or  BROWSE'}
//                                   {this.state.fileSize ? (
//                                     <span>{this.state.fileSize}KB</span>
//                                   ) : (
//                                     'No file'
//                                   )}
//                                 </ReactTooltip>
//                               )
//                               : null}
//                           </a>
//                         </button>
//                         <input
//                           id='input-file-4 vision-file-uploadmargin file-top'
//                           type='file'
//                           title={this.state.fileName}
//                           name='base64'
//                           onChange={(e) => this.uploadHealthForm(e, false)}
//                           onClick={(e) => this.reUploadFile(e, false)}
//                           accept=".pdf, .jpg, .jpeg, .png"
//                         // disabled={
//                         //   this.state.privilageSettings.Add_Edit == 1
//                         //     ? false
//                         //     : true
//                         // }
//                         />
//                         <span className='text-danger f-13'>
//                           {this.state.fileError}
//                         </span>
//                       </div>
//                       <span className='fileName-4 file-left'>
//                         {this.state.uploadedFile ? (
//                           <span className='viewFileAddVisits'>
//                           {this.state.unSupportedFile === false ?
//                           <a className="viewFileAddVisitsView float-left" name='view' onClick={this.handleView}>
//                               {t('View file')}
//                               </a> : 
//                             <span className="fileError float-left">
//                             <p className="mb-1 f-11">{t('Supported file format - pdf, jpg, jpeg, png.')}</p>
//                             </span>                            
//                         }
//                             <button
//                               type='button'
//                               disabled={this.state.errors}
//                               className='btn btn-secondary scoliosis-btndelete float-right'
//                               onClick={this.handleDelete}
//                             >
//                               {t('Delete File')}
//                             </button>
//                           </span>
//                         ) : null}
//                       </span>
//                     </div>
//                   </div>
//                   <div className='form-footer'>
//                     <button
//                       type='button'
//                       data-dismiss='modal'
//                       className='btn btn-secondary button-preview'
//                       disabled={
//                         this.state.visitTimeInError ||
//                         this.state.visitTimeOutError ||
//                         !this.state.visitTimeIn ||
//                         !this.state.visitTimeOut ||
//                         this.state.unSupportedFile||
//                         this.state.submitButtonDisabled
//                       }
//                       onClick={this.handleSubmit}
//                     >
//                       {this.props.loading && (
//                         <i className='fa fa-spinner fa-spin'></i>
//                       )}
//                       {t('SUBMIT')}
//                     </button>
//                     <button
//                       type='button'
//                       className='btn btn-primary cancel-button'
//                       data-dismiss='modal'
//                       onClick={this.modalHide}
//                     >
//                       {t('CANCEL')}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* </div> */}
//         </Modal>
//         <div
//           className="modal health-form-modal health-view-modal medication-view-modal parent-modal single-column fade"
//           id="addOrEditVisitModal"
//           tabIndex={-1}
//           role="dialog"
//           aria-labelledby="visionModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog" role="document">
//             <div
//               className="modal-content"
//               style={{ height: "auto", minHeight: "100vh" }}
//             >
//               <div className="modal-header">
//                 <h5
//                   className="modal-title"
//                   id="previousChartModalLabel"
//                 >
//                   {t("Add Or Hide Visit Type")}
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close top-close-css"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                   onClick={()=>this.modalHide("AddOrHide")}
//                 ></button>
//               </div>
//               <div className="modal-body">

//                 {!showBodyList ? (
//                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pr-0">
//                     <h1 className="complication-header">
//                       {t("Visit Type")}
//                     </h1>

//                     <ul className="complication-list">
//                       {this.visitCheckboxMap()}
//                     </ul>

//                   </div>


//                 ) : (
//                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pr-0">
//                     <h1 className="complication-header">
//                       {t("Visit Type")}
//                     </h1>
//                     <ul className="complication-list">
//                       {ListByBodyPart.length > 0 &&
//                         ListByBodyPart.map((Listbypart) => (
//                           <>
//                             <h1>{Listbypart.area}</h1>
//                             <li>
//                               {Listbypart.visittypes.map((obj) => (
//                                 <p
//                                   data-toggle="modal"
//                                   data-target="#addVisitModal"
//                                   className="visits-cursor"
//                                   onClick={() =>
//                                     this.handleVisitSubItems(obj)
//                                   }
//                                 >
//                                   {obj.visittypename}
//                                 </p>
//                               ))}
//                             </li>

//                           </>
//                         ))}
//                     </ul>

//                   </div>
//                 )}

//                 {/* </div> */}
//                 {/* </div> */}
//                 {/* </div> */}
//               </div>
//               <div className="form-footer">
//                 <button
//                   type="button"
//                   data-dismiss="modal"
//                   className="btn btn-secondary btn-visittype"



//                   onClick={this.handleSubmitVisitTypes}
//                 >

//                   {t("Submit")}
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-primary cancel-button"
//                   data-dismiss="modal"
//                   onClick={()=>this.modalHide("AddOrHide")}
//                 >
//                   {t("CANCEL")}
//                 </button>
//               </div>
//             </div>

//           </div>

//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   visitLogData: state.studentVisitLogReducer.message,
//   visitSearchList: state.studentVisitLogReducer.visitGetResponse,
//   visitBodySearchList: state.studentVisitLogReducer.visitBodyGetResponse,
//   subItemsList: state.studentVisitLogReducer.subItemsGetResponse,
//   visitLogDataError: state.studentVisitLogReducer.error,
//   loading: state.studentVisitLogReducer.loading,
//   getEmergencyContactResponse:
//     state.getEmergencyContactReducer.getEmergencyContactResponse,
//   studentVisitEmailTemplate: state.studentVisitLogReducer.studentVisitTemplate,
//   studentVisitEmail: state.studentVisitLogReducer.studentVisitEmailmessage,
//   schoolVisitTypes: state.schoolVisitTypesReducer.schoolVisitType,
//   student: state.studentInfoReducer.studentList,
//   schoolVisitTypePost: state.schoolVisitTypesReducer.schoolVisitTypePost

// });


// export default withTranslation()(
//   connect(mapStateToProps)(withRouter(AddNewVisit))
// );




// import React, { Component, useRef } from "react";
// import { withTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { school, upload, Component211 } from "../../constants/Constants";
// import { connect } from "react-redux";
// import { getUserToken, getUserPrevilage } from "../../services/AuthService";
// import dateFormat from "dateformat";
// import Slider from "react-slick";
// import "../../assets/css/slick-theme.css";
// import "../../";
// import { fetchStudentInfo } from "../../actions/StudentAction/GetSudentInfoAction";
// import StudentTrackerLog from "./StudentTrackerlog";
// import EmergencyContact from "./EmergencyContact";
// import MARadd from "../student/MARadd";
// import Scoliosis from "../student/Scoliosis";
// import StudentVisionList from "./StudentVisionList";
// import StudentTreatment from "./AddTreatment";
// import { blobStorageUrl } from "../../constants/Constants";
// import DentalScreening from "./DentalScreening";
// import StudentHouseholdDetails from "./StudentHouseholddetails";
// import jsPDF from "jspdf";
// import { CSVLink } from "react-csv";
// import { export_csv, export_pdf ,openParentID } from "../../constants/Constants";
// import Tooltip from "../public/Tooltip";
// import { studentImmunizationGetData } from "../../actions/StudentAction/GetStudentImmunizationAction";
// import { fetchStudentVisitLog } from ".././../../src/actions/StudentAction/GetStudentVisitLogAction";
// import { immunizationStatusGetData } from "../../actions/StudentAction/GetImmunizationStatusAction";
// import { fetchHealthFormLatestRecord } from "../../actions/StudentAction/GetHealthFormLatestRecordAction";
// import { getEmergencyContact } from "../../actions/StudentAction/GetEmergencyContactDetails";
// import { fetchStudentMedicationStatusYearTabData } from "../../actions/StudentAction/GetStudentMedicationStatusByYearTabDataAction";
// import { treatmentViewData } from "../../actions/StudentAction/GetStudentTreatmentAuthorizationAction";
// import { fetchOutcomesData } from "../../actions/StudentAction/GetOutcomeDetailsAction";
// import { utcToDateString } from '../../util/utcDateConverter'
// import _ from "lodash";
// import moment from "moment";

// const headers = [
//   { label: "Student Name", key: "studentName" },
//   { label: "Student Id", key: "studentId" },
//   { label: "School Name", key: "schoolName" },
//   { label: "School Address", key: "schoolAddress" },
//   { label: "School Phone", key: "schoolPhone" },
//   { label: "Grade", key: "grade" },
//   { label: "Date Of Birth", key: "dob" },
//   { label: "Sex", key: "gender" },
//   { label: "Immunization", key: "immunization" },
//   { label: "Status", key: "status" },
//   { label: "Visit Type", key: "visittypename" },
//   { label: "Visit Outcome", key: "visitoutcome" },
//   { label: "Visit Timein", key: "visittimein" },
//   { label: "Visit Timeout", key: "visittimeout" },
//   { label: "Parent Name", key: "parentName" },
//   { label: "Parent Phone Number", key: "parentNamePhoneNumber" },
//   { label: "Parent Email", key: "parentEmailAddress" },
//   { label: "Parent Address", key: "parantAddress" },
//   { label: "Dentist Name", key: "dentist_name" },
//   { label: "Dentist Address", key: "dentist_address" },
//   { label: "Dentist Phone Number", key: "dentist_phone" },
//   { label: "Physician Name", key: "physician_name" },
//   { label: "Physician Address", key: "physician_address" },
//   { label: "Physician Phone Number", key: "physician_phone" },
//   { label: "Medication Name", key: "medicinename" },
//   { label: "Dose", key: "dose" },
//   { label: "School Year", key: "schoolyear" },
//   { label: "Medication Form", key: "medicineform" },
//   { label: "Expiry Date", key: "expirydate" },
//   { label: "Available Quantity", key: "quantityavailable" },
//   { label: "Quantity Received", key: "quantityreceived" },
//   { label: "ReOrder Quantity", key: "reorderquantity" },
//   { label: "Time(s) of Medicine", key: "timeofmedicine" },
//   { label: "Dosage(s) of Medicine / Dosage Unit", key: "dosageunit" },
//   { label: "Days", key: "days" },
//   { label: "Treatment Type", key: "treatmentname" },
//   { label: "Time of Treatment", key: "timeOfTreatment" },
//   { label: "Treatment Days", key: "treatmentDays" },
//   { label: "School Year", key: "treatmentSchoolYear" },
//   { label: "Expiry Date", key: "treatmentExpiryDate" },
// ];

// class StudentPro extends Component {
//   state = {
//     data: "",
//     school: "",
//     studentName: "",
//     schoolName: "",
//     studentNumber: "",
//     DOB: "",
//     graduationYear: "",
//     Grade: "",
//     dentist: "",
//     general: "",
//     dentistPh: "",
//     generalPh: "",
//     parent: "",
//     parentPh: "",
//     studentId: "",
//     keyword_school: "School",
//     keyword_grade: "Grade",
//     exporting: false,
//     exportData: [],
//     whitelabelled: localStorage.getItem("whitelabelled") == "true",
//     visionPrivilage: {
//       View: 1,
//     },
//     scoliosisPrivilage: {
//       View: 1,
//     },
//     dentalPrivilage: {
//       View: 1,
//     },
//     trackingPrivilage: {
//       View: 1,
//     },
//     Download_Print: {
//       view: 1,
//     },
//   };
//   getMonth = (month) => {
//     const monthNames = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     return(monthNames[parseInt(month)])
//   }
//   componentDidMount = () => {
//     this.setPrivilageSetting();
//     let Id = this.props.match.params.Id;
//     const idObj = {
//       studentNumber: Id,
//     };
//     let studentObj = {
//       id_studentInformation: Id,
//       schoolYear: "",
//       id_provider: "",
//     };
//     // this.props.dispatch(fetchHealthFormLatestRecord(studentObj));
//     // this.props.dispatch(fetchStudentInfo(idObj));
//     // this.props.dispatch(studentImmunizationGetData({ id: Id }));
//     // this.props.dispatch(immunizationStatusGetData());
//     this.props.dispatch(fetchOutcomesData()); //get visi outcome dropdown data

//     // this.props.dispatch(
//     //   fetchStudentVisitLog({
//     //     studentInformation: Id,
//     //   })
//     // );
//     let studentObj2 = {
//       id_studentInformation: Id,
//       schoolyear: "",
//       medicinename: "",
//     };
//     this.props.dispatch(fetchStudentMedicationStatusYearTabData(studentObj2));
//     let studentObj3 = {
//       id_studentInformation: Id,
//       schoolyear: "",
//       treatmenttype: "",
//     };
//     this.props.dispatch(treatmentViewData(studentObj3));
//     // this.props.dispatch(getEmergencyContact(studentObj));
//     let whitelabelled = localStorage.getItem("whitelabelled") == "true";
//     if (whitelabelled) {
//       let keywords = JSON.parse(localStorage.getItem("keywords"));
//       if (keywords.length > 0) {
//         keywords.map((item) => {
//           if (item.keyword === "School") {
//             this.setState({ keyword_school: item.replacevalue });
//           } else if (item.keyword === "Grade") {
//             this.setState({ keyword_grade: item.replacevalue });
//           }
//         });
//       }
//     }
//   };

//   setPrivilageSetting = () => {
//     const privilage = getUserPrevilage();
//     privilage.map((pr) => {
//       // if (pr.previlageName === "Screening") {
//       //   JSON.parse(pr.previlageValueText).map((pValue) => {
//       //     let temp = { ...this.state.screeningPrivilage };
//       //     temp.View = pValue.View;
//       //     this.setState({ screeningPrivilage: temp });
//       //   });
//       // }
//       if (pr.previlageName === "VisionScreening") {
//         JSON.parse(pr.previlageValueText).map((pValue) => {
//           let temp = { ...this.state.visionPrivilage };
//           temp.View = pValue.View;
//           this.setState({ visionPrivilage: temp });
//         });
//       } else if (pr.previlageName === "Scoliosis") {
//         JSON.parse(pr.previlageValueText).map((pValue) => {
//           let temp = { ...this.state.scoliosisPrivilage };
//           temp.View = pValue.View;
//           this.setState({ scoliosisPrivilage: temp });
//         });
//       } else if (pr.previlageName === "DentalScreening") {
//         JSON.parse(pr.previlageValueText).map((pValue) => {
//           let temp = { ...this.state.dentalPrivilage };
//           temp.View = pValue.View;
//           this.setState({ dentalPrivilage: temp });
//         });
//       } else if (pr.previlageName === "AdministratorTracking") {
//         JSON.parse(pr.previlageValueText).map((pValue) => {
//           let temp = { ...this.state.trackingPrivilage };
//           temp.View = pValue.View;
//           this.setState({ trackingPrivilage: temp });
//         });
//       }
//     });
//     this.setState({});
//   };

//   statusOption = (item) => {
//     let studentImmunization = _.cloneDeep(
//       this.props.studentImmunizationList.result[0]
//     );
//     let option = "No Status";
//     if (
//       studentImmunization &&
//       studentImmunization.immunizationlist.length > 0
//     ) {
//       studentImmunization.immunizationlist.map((val) => {
//         if (
//           !_.isEmpty(val.immunization) &&
//           item.id._id === val.immunization._id
//         ) {
//           option = val.status.statustitle;
//           return option;
//         }
//         return option;
//       });
//     }
//     return option;
//   };

//   handleExport = async () => {
//     this.setState({ exporting: true });
//     const firstname = this.state.data?.firstname
//       ? this.state.data?.firstname
//       : "-";
//     const lastname = this.state.data?.lastname ? this.state.data?.lastname : "-";
//     const middlename = this.state.data?.middlename
//       ? this.state.data?.middlename
//       : "-";
//     const studName = `${firstname} ${middlename} ${lastname}`;
//     const studGrade =
//       this.state.data?.grades == null ? null : this.state.data?.grades?.grade;
//     const schoolAddress = this.state.school ? this.state.school?.address : "-";
//     const schoolPhone = this.state.school ? this.state.school?.schoolphone : "-";
//     const studDOB =
//       this.state.data?.sidob == undefined
//         ? "-"
//         : dateFormat(this.state.data?.sidob, "d mmm yyyy");
//     const parentDetails =
//       this.props.getEmergencyContactResponse.data &&
//         this.props.getEmergencyContactResponse.data?.length
//         ? this.props.getEmergencyContactResponse.data[0]?.parentDetails
//         : null;
//     const dentistdetails =
//       this.props.studentYear && this.props.studentYear.data?.length
//         ? this.props.studentYear.data[0]?.dentistdetails
//         : null;
//     const physiciandetails =
//       this.props.studentYear && this.props.studentYear.data?.length
//         ? this.props.studentYear.data[0]?.physiciandetails
//         : null;
//     let parentName = "-";
//     let parentNamePhoneNumber = "-";
//     let parentEmailAddress = "-";
//     let parantAddress = "-";
//     const dentist_address =
//       dentistdetails && dentistdetails?.dentist_address
//         ? dentistdetails?.dentist_address
//         : "-";
//     const dentist_name =
//       dentistdetails && dentistdetails?.dentist_name
//         ? dentistdetails?.dentist_name
//         : "-";
//     const dentist_phone =
//       dentistdetails && dentistdetails?.dentist_phone
//         ? dentistdetails?.dentist_phone
//         : "-";
//     const physician_address =
//       physiciandetails && physiciandetails?.physician_address
//         ? physiciandetails?.physician_address
//         : "-";
//     const physician_name =
//       physiciandetails && physiciandetails?.physician_name
//         ? physiciandetails?.physician_name
//         : "-";
//     const physician_phone =
//       physiciandetails && physiciandetails?.physician_phone
//         ? physiciandetails?.physician_phone
//         : "-";

//     if (parentDetails) {
//       parentName = parentDetails?.parentname;
//       parentNamePhoneNumber = parentDetails?.phonenumber;
//       if (
//         parentNamePhoneNumber === null ||
//         parentNamePhoneNumber === undefined
//       ) {
//         parentNamePhoneNumber = "-";
//       }

//       parentEmailAddress = parentDetails?.parentemailaddress;
//       if (parentEmailAddress === null || parentEmailAddress === undefined) {
//         parentEmailAddress = "-";
//       }
//       parantAddress = parentDetails?.address1;
//       if (parantAddress === null || parantAddress === undefined) {
//         parantAddress = "-";
//       }
//     }
//     const dataArray = [];
//     const studentProfile = {
//       studentName: studName,
//       studentId: this.state.data?.studentnumber,
//       schoolName: this.state.school?.schoolname,
//       schoolAddress,
//       schoolPhone,
//       grade: studGrade,
//       dob: studDOB,
//       gender: this.state.data?.gender,
//     };
//     const immunizationArray = [];
//     if (
//       this.props.schoolImmunizationList &&
//       this.props.schoolImmunizationList?.result &&
//       this.props.schoolImmunizationList?.result?.length
//     ) {
//       this.props.schoolImmunizationList.result[0].immunizationlist.map(
//         (obj) => {
//           let status = this.statusOption(obj);
//           immunizationArray.push({
//             immunization: obj.id.immunizationname,
//             status,
//           });
//         }
//       );
//     }
//     const stduentMedicationDataResponse =
//       this.props.stduentMedicationDataResponse &&
//         this.props.stduentMedicationDataResponse.data.length
//         ? this.props.stduentMedicationDataResponse.data
//         : [];
//     const studentMedicationArray = [];
//     if (stduentMedicationDataResponse.length) {
//       stduentMedicationDataResponse.map((obj) => {
//         const medicinename = obj?.medicinename ? obj?.medicinename : "-";
//         const dose = obj?.dose ? obj?.dose : "-";
//         const schoolyear = obj?.schoolyear ? obj?.schoolyear : "-";
//         const medicineform = obj?.medicineform ? obj?.medicineform : "-";
//         const expirydate = obj?.expirydate
//           ? dateFormat(obj.expirydate, "d mmm yyyy")
//           : "-";
//         const quantityavailable = obj?.quantityavailable
//           ? obj?.quantityavailable
//           : "-";
//         const quantityreceived = obj?.quantityreceived
//           ? obj?.quantityreceived
//           : "-";
//         const reorderquantity = obj?.reorderquantity ? obj?.reorderquantity : "-";
//         const timeofmedicine = obj?.asneeded ? "-" : obj?.timeofmedicine ? obj?.timeofmedicine.join(",\n") : "-";
//         const dosageunit = obj?.asneeded ? obj?.dosage : obj?.dosageunit ? obj?.dosageunit.join(",\n") : "-";
//         const days = obj?.asneeded ? "-" : obj?.days ? obj?.days.join(", ") : "-";
//         studentMedicationArray.push({
//           medicinename,
//           dose,
//           schoolyear,
//           medicineform,
//           expirydate,
//           quantityavailable,
//           quantityreceived,
//           reorderquantity,
//           timeofmedicine,
//           dosageunit,
//           days,
//         });
//       });
//     }
//     const stduentTreatmentDataResponse =
//       this.props.formData && this.props.formData.data.length
//         ? this.props.formData.data
//         : [];
//     const studentTreatmentArray = [];
//     if (stduentTreatmentDataResponse.length) {
//       stduentTreatmentDataResponse.map((obj) => {
//         const treatmentname = obj.treatmentname ? obj.treatmentname : "-";
//         const timeOfTreatment = obj?.asneeded ? "-" : obj.timeoftreatment ? obj.timeoftreatment.join(",\n") : "-";
//         const treatmentDays = obj?.asneeded ? "-" : obj.scheduleddays ? obj.scheduleddays.join(", ") : "-";
//         const treatmentSchoolYear = obj.fk_schoolyear ? obj.fk_schoolyear : "-";
//         const treatmentExpiryDate = obj.expirydate
//           ? dateFormat(obj.expirydate, "d mmm yyyy")
//           : "-";
//         studentTreatmentArray.push({ treatmentname, timeOfTreatment, treatmentDays, treatmentSchoolYear, treatmentExpiryDate, });
//       });
//     }
//     let length = [
//       studentMedicationArray?.length,
//       immunizationArray?.length,
//       this.props.visitLogData?.result?.length,
//       studentTreatmentArray?.length,
//     ].sort(function (a, b) {
//       return b - a;
//     });
//     length = length[0];

//     for (let i = 0; i < length; i++) {
//       let obj = {};
//       let immuneData = immunizationArray[i];
//       let treatmentData = studentTreatmentArray[i];
//       let medicationData = studentMedicationArray[i];
//       let logData =
//         this.props.visitLogData &&
//           this.props.visitLogData.result &&
//           this.props.visitLogData.result.length
//           ? this.props.visitLogData.result[i]
//           : null;
//       if (logData) {
//         const visitTimeIn = moment(logData.visittimein).format(
//           "DD MMM YYYY h:mm A"
//         );
//         const visitTimeOut = moment(logData.visittimeout).format(
//           "DD MMM YYYY h:mm A"
//         );
//         obj = {
//           visittypename: logData.fk_visittype.visittypename,
//           visitoutcome: logData.visitoutcome,
//           visittimein: visitTimeIn,
//           visittimeout: visitTimeOut,
//         };
//       }
//       if (i == 0) {
//         dataArray.push({
//           ...studentProfile,
//           ...immuneData,
//           ...obj,
//           ...{
//             parentName,
//             parentNamePhoneNumber,
//             parentEmailAddress,
//             parantAddress,
//             dentist_name,
//             dentist_address,
//             dentist_phone,
//             physician_name,
//             physician_address,
//             physician_phone,
//           },
//           ...treatmentData,
//           ...medicationData,
//         });
//       } else {
//         dataArray.push({
//           ...immuneData,
//           ...obj,
//           ...treatmentData,
//           ...medicationData,
//         });
//       }
//     }
//     await this.setState({ exportData: dataArray });
//     this.exportCsvRef.current.link.click();
//     this.setState({ exporting: false });
//   };

//   handlePDFExport = async () => {
//     const doc = new jsPDF();
//     this.setState({ exporting: true });
//     const firstname = this.state.data?.firstname
//       ? this.state.data?.firstname
//       : "";
//     const lastname = this.state.data?.lastname ? this.state.data?.lastname : "";
//     const middlename = this.state.data?.middlename
//       ? this.state.data?.middlename
//       : "";
//     const studName = `${firstname} ${middlename} ${lastname}`;
//     const studGrade =
//       this.state.data?.grades == null ? null : this.state.data?.grades?.grade;
//     const schoolAddress = this.state.school ? this.state.school?.address : "-";
//     const schoolPhone = this.state.school ? this.state.school?.schoolphone : "-";
//     const studDOB =
//       this.state.data?.sidob == undefined
//         ? "-"
//         : dateFormat(this.state.data?.sidob, "d mmm yyyy");
//     const parentDetails =
//       this.props.getEmergencyContactResponse?.data &&
//         this.props.getEmergencyContactResponse?.data?.length
//         ? this.props.getEmergencyContactResponse?.data[0]?.parentDetails
//         : null;
//     const dentistdetails =
//       this.props.studentYear && this.props.studentYear?.data?.length
//         ? this.props.studentYear?.data[0]?.dentistdetails
//         : null;
//     const physiciandetails =
//       this.props.studentYear && this.props.studentYear?.data?.length
//         ? this.props.studentYear?.data[0]?.physiciandetails
//         : null;
//     let parentName = "";
//     let parentNamePhoneNumber = "";
//     let parentEmailAddress = "";
//     let parantAddress = "";
//     const dentist_address =
//       dentistdetails && dentistdetails?.dentist_address
//         ? dentistdetails?.dentist_address
//         : "-";
//     const dentist_name =
//       dentistdetails && dentistdetails?.dentist_name
//         ? dentistdetails?.dentist_name
//         : "-";
//     const dentist_phone =
//       dentistdetails && dentistdetails?.dentist_phone
//         ? dentistdetails?.dentist_phone
//         : "-";
//     const physician_address =
//       physiciandetails && physiciandetails?.physician_address
//         ? physiciandetails?.physician_address
//         : "-";
//     const physician_name =
//       physiciandetails && physiciandetails?.physician_name
//         ? physiciandetails?.physician_name
//         : "-";
//     const physician_phone =
//       physiciandetails && physiciandetails?.physician_phone
//         ? physiciandetails?.physician_phone
//         : "-";

//     if (parentDetails) {
//       parentName = parentDetails?.parentname ? parentDetails?.parentname : "-";
//       parentNamePhoneNumber = parentDetails?.phonenumber;
//       if (
//         parentNamePhoneNumber === null ||
//         parentNamePhoneNumber === undefined
//       ) {
//         parentNamePhoneNumber = "-";
//       }

//       parentEmailAddress = parentDetails?.parentemailaddress;
//       if (parentEmailAddress === null || parentEmailAddress === undefined) {
//         parentEmailAddress = "-";
//       }
//       parantAddress = parentDetails?.address1;
//       if (parantAddress === null || parantAddress === undefined) {
//         parantAddress = "-";
//       }
//     }

//     const dataArray = [
//       [
//         studName,
//         this.state.data?.studentnumber ? this.state.data?.studentnumber : "-",
//         this.state.school?.schoolname ? this.state.school?.schoolname : "-",
//         schoolAddress,
//         schoolPhone,
//         studGrade,
//         studDOB,
//         this.state.data?.gender ? this.state.data?.gender : "-",
//       ],
//     ];
//     await doc.autoTable({ startY: 1 })
//     doc.text(`${studName} - Report`, 14, doc.lastAutoTable.finalY + 10);
//     await doc.autoTable({
//       head: [
//         [
//           "Student Name",
//           "Student Id",
//           "School Name",
//           "School Address",
//           "School Phone",
//           "Grade",
//           "Date Of Birth",
//           "Sex",
//         ],
//       ],
//       body: dataArray,
//       styles: { cellPadding: 0.8, fontSize: 8 },
//       theme: "striped",
//       startY: doc.lastAutoTable.finalY + 15,
//       didDrawPage: function (data) {
//         // Header

//         // Footer
//         let str = "Page " + doc.internal.getNumberOfPages();
//         doc.setFontSize(10);
//         let pageSize = doc.internal.pageSize;
//         let pageHeight = pageSize.height
//           ? pageSize.height
//           : pageSize.getHeight();
//         doc.text(str, data.settings.margin.left, pageHeight - 7);
//       },
//     });
//     const immunizationArray = [];
//     const schoolAddressLength = schoolAddress ? schoolAddress?.length : 1;
//     if (
//       this.props.schoolImmunizationList &&
//       this.props.schoolImmunizationList?.result &&
//       this.props.schoolImmunizationList?.result?.length
//     ) {
//       this.props.schoolImmunizationList.result[0].immunizationlist.map(
//         (obj) => {
//           let status = this.statusOption(obj);
//           immunizationArray.push([obj?.id?.immunizationname, status]);
//         }
//       );
//     }
//     if (immunizationArray.length) {
//       doc.setFontSize(10);
//       doc.text("Immunization", 14, doc.lastAutoTable.finalY + 10);
//       await doc.autoTable({
//         head: [["Immunization", "Status"]],
//         body: immunizationArray,
//         styles: { cellPadding: 0.8, fontSize: 8 },
//         theme: "striped",
//         startY: doc.lastAutoTable.finalY + 15,
//         didDrawPage: function (data) {
//           // Header        

//           // Footer
//           let str = "Page " + doc.internal.getNumberOfPages();
//           doc.setFontSize(10);
//           let pageSize = doc.internal.pageSize;
//           let pageHeight = pageSize.height
//             ? pageSize.height
//             : pageSize.getHeight();
//           doc.text(str, data.settings.margin.left, pageHeight - 7);
//         },
//       });
//     }

//     const visitLogArray = [];
//     if (
//       this.props.visitLogData &&
//       this.props.visitLogData?.result &&
//       this.props.visitLogData?.result?.length
//     ) {
//       this.props.visitLogData.result.map((obj) => {
//         const visitTimeIn = moment(obj?.visittimein).format(
//           "DD MMM YYYY h:mm A"
//         );
//         const visitTimeOut = moment(obj?.visittimeout).format(
//           "DD MMM YYYY h:mm A"
//         );
//         visitLogArray.push([
//           obj?.fk_visittype.visittypename,
//           obj?.visitoutcome,
//           visitTimeIn,
//           visitTimeOut,
//         ]);
//       });
//     }

//     if (visitLogArray.length) {
//       doc.setFontSize(10);
//       doc.text("Visits", 14, doc.lastAutoTable.finalY + 10);
//       await doc.autoTable({
//         head: [["Visit Type", "Visit Outcome", "Visit Timein", "Visit Timeout"]],
//         body: visitLogArray,
//         styles: { cellPadding: 0.8, fontSize: 8 },
//         theme: "striped",
//         startY: doc.lastAutoTable.finalY + 15,
//         didDrawPage: function (data) {
//           // Header          

//           // Footer
//           let str = "Page " + doc.internal.getNumberOfPages();
//           doc.setFontSize(10);
//           let pageSize = doc.internal.pageSize;
//           let pageHeight = pageSize.height
//             ? pageSize.height
//             : pageSize.getHeight();
//           doc.text(str, data.settings.margin.left, pageHeight - 7);
//         },
//       });
//     }

//     let emergencyContactDetails = [
//       [
//         parentName,
//         parentNamePhoneNumber,
//         parentEmailAddress,
//         parantAddress,
//         dentist_name,
//         dentist_address,
//         dentist_phone,
//         physician_name,
//         physician_address,
//         physician_phone,
//       ],
//     ];
//     doc.setFontSize(10);
//     doc.text("Contact Details", 14, doc.lastAutoTable.finalY + 10);
//     await doc.autoTable({
//       head: [
//         [
//           "Parent Name",
//           "Parent Phone Number",
//           "Parent EmailAddress",
//           "Parant Address",
//           "Dentist Name",
//           "Dentist Address",
//           "Dentist Phone",
//           "Physician Name",
//           "Physician Address",
//           "Physician Phone",
//         ],
//       ],
//       body: emergencyContactDetails,
//       styles: { cellPadding: 0.8, fontSize: 8 },
//       theme: "striped",
//       startY: doc.lastAutoTable.finalY + 15,
//       didDrawPage: function (data) {
//         // Header

//         // Footer
//         let str = "Page " + doc.internal.getNumberOfPages();
//         doc.setFontSize(10);
//         let pageSize = doc.internal.pageSize;
//         let pageHeight = pageSize.height
//           ? pageSize.height
//           : pageSize.getHeight();
//         doc.text(str, data.settings.margin.left, pageHeight - 7);
//       },
//     });
//     const stduentMedicationDataResponse =
//       this.props.stduentMedicationDataResponse &&
//         this.props.stduentMedicationDataResponse?.data?.length
//         ? this.props.stduentMedicationDataResponse?.data
//         : [];
//     const studentMedicationArray = [];

//     if (stduentMedicationDataResponse.length) {
//       stduentMedicationDataResponse.map((obj) => {
//         const medicinename = obj?.medicinename ? obj?.medicinename : "-";
//         const dose = obj?.dose ? obj?.dose : "-";
//         const schoolyear = obj?.schoolyear ? obj?.schoolyear : "-";
//         const medicineform = obj?.medicineform ? obj?.medicineform : "-";
//         const expirydate = obj?.expirydate
//           ? dateFormat(obj?.expirydate, "d mmm yyyy")
//           : "-";
//         const quantityavailable = obj?.quantityavailable
//           ? obj?.quantityavailable
//           : "-";
//         const quantityreceived = obj?.quantityreceived
//           ? obj?.quantityreceived
//           : "-";
//         const reorderquantity = obj?.reorderquantity ? obj?.reorderquantity : "-";
//         const timeofmedicine = obj?.asneeded ? "-" : obj?.timeofmedicine ? obj?.timeofmedicine.join(",\n") : "-";
//         const dosageunit = obj?.asneeded ? obj?.dosage : obj?.dosageunit ? obj?.dosageunit.join(",\n") : "-";
//         const days = obj?.asneeded ? "-" : obj?.days ? obj?.days.join(", ") : "-";
//         studentMedicationArray.push([
//           medicinename,
//           dose,
//           schoolyear,
//           medicineform,
//           expirydate,
//           quantityavailable,
//           quantityreceived,
//           reorderquantity,
//           timeofmedicine,
//           dosageunit,
//           days,
//         ]);
//       });
//     }

//     if (studentMedicationArray.length) {
//       doc.setFontSize(10);
//       doc.text("Medication Details", 14, doc.lastAutoTable.finalY + 10);
//       await doc.autoTable({
//         head: [
//           [
//             "Medication Name",
//             "Dose",
//             "School Year",
//             "Medication Form",
//             "Expiry Date",
//             "Available Quantity",
//             "Quantity Received",
//             "ReOrder Quantity",
//             "Time(s) of medicine",
//             "Dosage(s) of Medicine / Dosage Unit",
//             "Days",
//           ],
//         ],
//         body: studentMedicationArray,
//         styles: { cellPadding: 0.8, fontSize: 8 },
//         theme: "striped",
//         startY: doc.lastAutoTable.finalY + 15,
//         showHead: 'firstPage',
//         didDrawPage: function (data) {
//           // Header          

//           // Footer
//           let str = "Page " + doc.internal.getNumberOfPages();
//           doc.setFontSize(10);
//           let pageSize = doc.internal.pageSize;
//           let pageHeight = pageSize.height
//             ? pageSize.height
//             : pageSize.getHeight();
//           doc.text(str, data.settings.margin.left, pageHeight - 7);
//         },
//       });
//     }

//     const stduentTreatmentDataResponse =
//       this.props.formData && this.props.formData?.data?.length
//         ? this.props.formData?.data
//         : [];
//     const studentTreatmentArray = [];

//     if (stduentTreatmentDataResponse.length) {
//       stduentTreatmentDataResponse.map((obj) => {
//         const treatmentname = obj?.treatmentname ? obj?.treatmentname : "-";
//         const timeOfTreatment = obj?.asneeded ? "-" : obj.timeoftreatment ? obj.timeoftreatment.join(",\n") : "-";
//         const treatmentDays = obj?.asneeded ? "-" : obj.scheduleddays ? obj.scheduleddays.join(", ") : "-";
//         const treatmentSchoolYear = obj?.fk_schoolyear ? obj?.fk_schoolyear : "-";
//         const treatmentExpiryDate = obj?.expirydate
//           ? dateFormat(obj?.expirydate, "d mmm yyyy")
//           : "-";
//         studentTreatmentArray.push([treatmentname, timeOfTreatment, treatmentDays, treatmentSchoolYear, treatmentExpiryDate]);
//       });
//     }

//     if (studentTreatmentArray.length) {
//       doc.setFontSize(10);
//       doc.text("Treatment Details", 14, doc.lastAutoTable.finalY + 10);
//       await doc.autoTable({
//         head: [["Treatment Type", "Time of Treatment", "Treatment Days", "School Year", "Expiry Date"]],
//         body: studentTreatmentArray,
//         styles: { cellPadding: 0.8, fontSize: 8 },
//         theme: "striped",
//         startY: doc.lastAutoTable.finalY + 15,
//         didDrawPage: function (data) {
//           // Header          

//           // Footer
//           let str = "Page " + doc.internal.getNumberOfPages();
//           doc.setFontSize(10);
//           let pageSize = doc.internal.pageSize;
//           let pageHeight = pageSize.height
//             ? pageSize.height
//             : pageSize.getHeight();
//           doc.text(str, data.settings.margin.left, pageHeight - 7);
//         },
//       });
//     }
//     await doc.save("StudentBasicInfoReport.pdf");
//     this.setState({ exporting: false });
//   };

//   componentWillReceiveProps(props) {
//     if (props.student.length !== 0) {
//       props.student.data.map((item) => {
//         this.state.data = item;
//       });

//       if (this.state.data.schoolDetails !== undefined) {
//         this.state.data.schoolDetails.map((res) => {
//           this.state.school = res;
//         });
//       }
//     }
//   }

//   render() {
//     const { t } = this.props;
//     this.exportCsvRef = React.createRef();
//     const settingsNotScrolling = {
//       infinite: false,
//       speed: 500,
//       slidesToShow: window.innerWidth < 500 ? 3 : 4,
//       slidesToScroll: 1,
//       draggable: false,
//     };
//     const settings = {
//       // dots: false,
//       infinite: false,
//       speed: 500,
//       slidesToShow: window.innerWidth < 500 ? 3 : 4,
//       slidesToScroll: 1,
//       //   autoplaySpeed: 900,
//       // autoplay: true,
//       draggable: true,
//     };

//     let blobImage = blobStorageUrl + this.state.data.imagebloburl;
//     let studentId = this.props.match.params.Id;
//     let parentID = getUserToken().parentId;

//     return (
//       <>
//         <div className="profile-card">
//           <div className="profile-info">
//             <div className="d-flex">
//               <div className="div">
//                { this.state.data.imagebloburl !== "" ? (
//                   <img
//                     src={blobImage}
//                     className="blobprofile img-fluid"
//                     alt="profile"
//                   />
//                 ) : (
//                   <img
//                     src={Component211}
//                     className="profile img-fluid"
//                     alt="profile"
//                   />
//                 )
//                }
//               </div>
//               <div className="mt-4 ml-4 text-white">
//                 <h1 className="studName">
//                   {this.state.data.firstname} {""}
//                   {this.state.data.middlename}
//                   {""} {this.state.data.lastname}
//                 </h1>
//                 <p className="studId">{this.state.data.studentnumber}</p>
//                 {/* <a>{t("Edit Profile")}</a> */}
//               </div>
//             </div>
//           </div>
//           <div className="profile-info-2">
//             <p className="studSchool">
//               <img src={school} className="school" alt="school" />{" "}
//               <span>{this.state.school.schoolname}</span>
//             </p>
//             <ul>
//               {!this.state.whitelabelled && (
//                 <li>
//                   <p>{this.state.keyword_grade}</p>
//                   {this.state.data.grades == null ? null : (
//                     <p>{this.state.data.grades.grade}</p>
//                   )}
//                 </li>
//               )}
//               <li>
//                 <p>DOB</p>
//                 <p>
//                   {this.state.data.sidob == undefined || this.state.data.sidob == "" || this.state.data.sidob == null
//                     ? "-"
//                     : (this.state.data.sidob.split('-')[2] + '-' +this.getMonth(this.state.data.sidob.split('-')[1]) + '-' + this.state.data.sidob.split('-')[0])}
//                 </p>
//               </li>
//               <li>
//                 <p>{t("Sex")}</p>
//                 <p className="transf">{this.state.data.gender}</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <StudentHouseholdDetails />
//         <a className="export-report studentInfoExport">
//           {this.state.exporting ? t("Exporting") : t("Export Report")}
//           <>
//             <CSVLink
//               headers={headers}
//               filename="StudentBasicInfoReport.csv"
//               data={this.state.exportData}
//               ref={this.exportCsvRef}
//             />
//             {this.state.Download_Print.view === 1 ? (
//               <>
//                 <span
//                   className="export-button"
//                   onClick={this.handlePDFExport}
//                   style={{ float: "none" }}
//                 >
//                   <img
//                     src={export_pdf}
//                     className="delete-student-img ml-2"
//                     alt="celete-logo-img"
//                   />
//                 </span>
//                 <span
//                   className="export-button"
//                   onClick={this.handleExport}
//                   style={{ float: "none" }}
//                 >
//                   <img
//                     src={export_csv}
//                     className="delete-student-img ml-2"
//                     alt="celete-logo-img"
//                   />
//                 </span>
//               </>
//             ) : (
//               <>
//                 <Tooltip
//                   component={
//                     <span className="export-button">
//                       <img
//                         src={export_csv}
//                         className="delete-student-img ml-2"
//                         alt="celete-logo-img"
//                       />
//                       <img
//                         src={export_pdf}
//                         className="delete-student-img ml-2"
//                         alt="celete-logo-img"
//                       />
//                     </span>
//                   }
//                 />
//               </>
//             )}
//           </>
//         </a>
//         <StudentTrackerLog></StudentTrackerLog>

//         {this.state.visionPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 0 &&
//           this.state.dentalPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <StudentVisionList student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.scoliosisPrivilage.View === 1 &&
//           this.state.visionPrivilage.View === 0 &&
//           this.state.dentalPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <Scoliosis
//                   student={studentId}
//                   school={getUserToken().schoolId}
//                 />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}
//         {this.state.dentalPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 0 &&
//           this.state.visionPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <DentalScreening student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}
//         {this.state.trackingPrivilage.View === 1 &&
//           this.state.dentalPrivilage.View === 0 &&
//           this.state.scoliosisPrivilage.View === 0 &&
//           this.state.visionPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <MARadd />
//                 <StudentTreatment />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}
//         {this.state.visionPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 1 &&
//           this.state.dentalPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <StudentVisionList student={studentId} />
//                 <Scoliosis
//                   student={studentId}
//                   school={getUserToken().schoolId}
//                 />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.visionPrivilage.View === 1 &&
//           this.state.dentalPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <StudentVisionList student={studentId} />
//                 <DentalScreening student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.visionPrivilage.View === 1 &&
//           this.state.trackingPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 0 &&
//           this.state.dentalPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <StudentVisionList student={studentId} />
//                 <MARadd />
//                 <StudentTreatment />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}
//         {this.state.scoliosisPrivilage.View === 1 &&
//           this.state.dentalPrivilage.View === 1 &&
//           this.state.visionPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <Scoliosis
//                   student={studentId}
//                   school={getUserToken().schoolId}
//                 />
//                 <DentalScreening student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.dentalPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 0 &&
//           this.state.visionPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 1 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <MARadd />
//                 <StudentTreatment />
//                 <DentalScreening student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.dentalPrivilage.View === 0 &&
//           this.state.scoliosisPrivilage.View === 1 &&
//           this.state.visionPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 1 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <MARadd />
//                 <StudentTreatment />
//                 <Scoliosis
//                   student={studentId}
//                   school={getUserToken().schoolId}
//                 />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.dentalPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 1 &&
//           this.state.visionPrivilage.View === 1 &&
//           this.state.trackingPrivilage.View === 0 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <StudentVisionList student={studentId} />
//                 <Scoliosis
//                   student={studentId}
//                   school={getUserToken().schoolId}
//                 />
//                 <DentalScreening student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.dentalPrivilage.View === 0 &&
//           this.state.scoliosisPrivilage.View === 1 &&
//           this.state.visionPrivilage.View === 1 &&
//           this.state.trackingPrivilage.View === 1 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <MARadd />
//                 <StudentVisionList student={studentId} />
//                 <Scoliosis
//                   student={studentId}
//                   school={getUserToken().schoolId}
//                 />
//                 <StudentTreatment />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.dentalPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 1 &&
//           this.state.visionPrivilage.View === 0 &&
//           this.state.trackingPrivilage.View === 1 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settingsNotScrolling}>
//                 <MARadd />
//                 <Scoliosis
//                   student={studentId}
//                   school={getUserToken().schoolId}
//                 />
//                 <StudentTreatment />
//                 <DentalScreening student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}
//         {this.state.dentalPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 0 &&
//           this.state.visionPrivilage.View === 1 &&
//           this.state.trackingPrivilage.View === 1 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settings}>
//                 <MARadd />
//                 <StudentVisionList student={studentId} />
//                 <StudentTreatment />
//                 <DentalScreening student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         {this.state.dentalPrivilage.View === 1 &&
//           this.state.scoliosisPrivilage.View === 1 &&
//           this.state.visionPrivilage.View === 1 &&
//           this.state.trackingPrivilage.View === 1 ? (
//           <div className="slick-slider-mini">
//             <div className="type-list mt-3 p-0">
//               <Slider {...settings}>
//                 <MARadd />
//                 <StudentVisionList student={studentId} />
//                 <Scoliosis
//                   student={studentId}
//                   school={getUserToken().schoolId}
//                 />
//                 <StudentTreatment />
//                 <DentalScreening student={studentId} />
//               </Slider>
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}

//         <EmergencyContact studentDetails={this.state.data}></EmergencyContact>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   studentId: state.globalSearchReducer.studentList,
//   student: state.studentInfoReducer.studentList,
//   schoolImmunizationList:
//     state.studentImmunizationReducer.schoolImmunizationList,
//   immunizationStatuses: state.studentImmunizationReducer.immunizationStatuses,
//   studentImmunizationList:
//     state.studentImmunizationReducer.studentImmunizationList,
//   visitLogData: state.studentVisitLogReducer.visitGetResponse,
//   loading: state.studentInfoReducer.loading,
//   studentYear: state.healthFormLatestRecord.latestHealthReord,
//   getEmergencyContactResponse:
//     state.getEmergencyContactReducer.getEmergencyContactResponse,
//   stduentMedicationDataResponse:
//     state.studentMedicationStatusByYearTabDataReducer
//       .stduentMedicationDataResponse,
//   formData: state.studentTreatmentInfoReducer.formData,
// });
// export default withTranslation()(
//   connect(mapStateToProps)(withRouter(StudentPro))
// );
// import React, { Component } from "react";
// import { withTranslation } from "react-i18next";
// import { connect } from "react-redux";
// // import "../../../src/assets/css/styleTwo.css";
// import toaster from "toasted-notes";
// import { toast } from "react-toastify";
// import ReactTooltip from "react-tooltip";
// import "toasted-notes/src/styles.css";
// import "../../assets/css/custom.css";
// import view from "../../assets/images/view.png";
// import folder_png from "../../assets/images/folder.png";
// import noun_schedule_png from "../../assets/images/noun_schedule.png";
// import { postStudentVisionListData } from ".././../../src/actions/StudentAction/PostStudentVisionListAction";
// import {
//   fetchStudentVisionList,
//   fetchStudentVisionBlob,
// } from ".././../../src/actions/StudentAction/GetStudentVisionListAction";
// import { postUpdateStudentVisionListData } from ".././../../src/actions/StudentAction/PostUpdateStudentVisionListAction";
// import Modal from "react-bootstrap/Modal";
// import {
//   print,
//   noun_schedule,
//   folder,
//   downArrow,
//   popupEdit,
//   add,
//   men,
//   noun_Eye,
//   attachement,
// } from "../../constants/Constants";
// import ReactPaginate from "react-paginate";
// import dateFormat from "dateformat";
// import moment from "moment";
// import { Link } from "react-router-dom";
// import { getUserToken, getUserPrevilage } from "../../services/AuthService";
// import DatePicker from "react-datepicker";
// import {
//   visionEyeResultData,
//   visionIshiharasData,
//   visionScreeningOutcomeData,
// } from ".././../../src/actions/StudentAction/GetVisionAction";
// import Pagination from "react-pagination-js";
// import { getParentid_school } from "../../services/AuthService";
// import { utcToDateString , dateToUtcString } from '../../util/utcDateConverter';
// import { postStudentMedicalHistorySelect } from "../../actions/StudentAction/GetStudentMedicalHistoryListSelectAction";

// const toolTipStyles = {
//   width: "100px",
//   "word-break": "break-all",
//   "overflow-wrap": "break-word",
//   display: "block",
// };

// class StudentVisionList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       currentPage: 1,
//       LeftEyeCharacters: 50,
//       rightEyeCharacters: 50,
//       noteCharaters: 250,
//       visionAidCharaters: 250,
//       updateLeftEyeCharacters: 50,
//       updaterightEyeCharacters: 50,
//       updatenoteCharaters: 250,
//       updatevisionAidCharaters: 250,
//       fileError: "",
//       show: false,
//       activePage: 0,
//       error: "",
//       visible: false,
//       visible1: true,
//       visibleView: false,
//       noteDetails: false,
//       visionAidDetails: false,
//       ShowEyedetails: false,
//       ShowRightEyedetails: false,
//       visionDate: new Date(),
//       leftEye: "",
//       rightEye: "",
//       Ishihara: "",
//       randomDot: "",
//       visionAid: "",
//       screeningOutcome: "",
//       note: "",
//       base64: "",
//       leftEyeDetails: "",
//       rightEyeDetails: "",
//       fileName: "",
//       fileType: "",
//       fileSize: 0,
//       updateFormFileUploadFlag: false,
//       visionEyeResultDatalistvision: "",
//       IshiharaDatalist: "",
//       visionscreeningOutcomeDatalist: "",
//       visionEditDate: new Date(),
//       loading: false,

//       updateForm: {
//         LeftEyeupdateCharacters: 50,
//         rightEyeupdateCharacters: 50,
//         noteupdateCharaters: 250,
//         visionDate: new Date(),
//         leftEye: "",
//         rightEye: "",
//         Ishihara: "",
//         randomDot: "",
//         visionAid: "",
//         screeningOutcome: "",
//         note: "",
//         base64: "",
//         leftEyeDetails: "",
//         rightEyeDetails: "",
//         fileName: "",
//         fileType: "",
//         errors: "",
//         screeningOutcomeError: "",
//         screeningOutcomeUpdateError: "",
//         pdfdata: "",
//         fileSizes: 0,
//         currentPage: 1,
//         loading: false,
//       },
//       eyeresultArray: [],
//       ishiharaArray: [],
//       screeningOutcomeArray: [],
//       privilageSettings: {
//         View: 1,
//         Add_Edit: 1,
//       },
//     };
//   }

//   openModalViewnew = async (visionList) => {
//     if (visionList && visionList.bloburl) {
//       await this.props.dispatch(
//         fetchStudentVisionBlob({ blobName: visionList.bloburl })
//       );
//     }
//     let visible4 = this.state.visibleView;
//     let updateForm = this.state.updateForm;
//     if (visible4 == false) {
//       this.state.visionEditDate = new Date(visionList.visionreferaldate);
//       updateForm.leftEye = visionList.lefteyeresult;
//       updateForm.rightEye = visionList.righteyeresult;
//       updateForm.Ishihara = visionList.ishihara;
//       updateForm.randomDot = visionList.randomdote;
//       updateForm.visionAid = visionList.visionaid;
//       updateForm.screeningOutcome = visionList.screeningoutcome;
//       updateForm.note = visionList.note;
//       updateForm.base64 = visionList.blobUrl;
//       updateForm.leftEyeDetails = visionList.lefteye;
//       updateForm.rightEyeDetails = visionList.righteye;
//       updateForm.fileName = visionList.documentname;
//       this.setState({
//         visibleView: visionList._id,
//         updateForm: updateForm,
//       });
//     } else {
//       updateForm.fileName = "";
//       updateForm.fileSizes = "";
//       this.setState({
//         visibleView: false,
//         updateForm: updateForm,
//         fileSizes: 0,
//       });
//     }
//   };
//   modalHide = () => {
//     this.setState({
//       show: false,
//       visible: true,
//       visionDate: new Date(),
//     });
//     let updateForm = this.state.updateForm;
//     {
//       updateForm.fileName = "";
//       updateForm.fileSizes = "";
//       this.setState({
//         visibleView: false,
//         updateForm: updateForm,
//         fileSizes: 0,
//       });
//     }
//   };
//   modalShow = () => {
//     this.setState({
//       show: true,
//     });
//   };
//   openModal1() {
//     this.setState({
//       visible1: true,
//     });
//   }

//   closeModal1() {
//     this.setState({
//       visible1: false,
//     });
//   }
//   openModal() {
//     let visible2 = this.state.visible;
//     if (visible2 == true) {
//       this.setState({
//         visible: false,
//         fileName: "",
//         base64: "",
//         fileSize: 0,
//       });
//     } else {
//       this.setState({
//         visible: true,
//         fileName: "",
//         fileType: "",
//         base64: "",
//       });
//     }
//   }

//   closeModal() {
//     this.setState({
//       visible: false,
//     });
//   }

//   getMedicineFormDropDown = () => {
//     return [
//       <option value="">Select</option>,
//       <option value="Passed">Passed</option>,
//       <option value="Failed">Failed</option>,
//     ];
//   };

//   getMedicineFormDropDown1 = () => {
//     return [<option value="No">No</option>, <option value="Yes">Yes</option>];
//   };

//   handleDateTimeInChange = (date) => {
//     this.setState({
//       visionDate: date,
//     });
//   };
//   handleDateTimeInChanged = (date) => {
//     this.setState({
//       visionEditDate: date,
//     });
//   };

//   handleChange = (e) => {
//     this.setState({ loading: false, buttonDisable: false });
//     let names = e.target.name;
//     if (e.target.id == "RightEyeDetailsId") {
//       this.setState({
//         rightEyeCharacters: 50 - e.target.value.length,
//         ShowRightEyedetails: true,
//       });
//     }
//     if (e.target.id == "leftEyeDetailsId") {
//       this.setState({
//         LeftEyeCharacters: 50 - e.target.value.length,
//         ShowEyedetails: true,
//       });
//     }
//     if (e.target.name == "visionAid") {
//       this.setState({
//         visionAidCharaters: 250 - e.target.value.length,
//         visionAidDetails: true,
//       });
//     }
//     if (e.target.name == "note") {
//       this.setState({
//         noteCharaters: 250 - e.target.value.length,
//         noteDetails: true,
//       });
//     }
//     if (e.target.name == "visionDate") {
//       if (e.target.value > moment().format("DD-MMM-YYYYTHH:mm")) {
//         let dateMessage = "Please select the valid date.";
//         this.setState({
//           errors: dateMessage,
//         });
//       } else {
//         this.setState({
//           [names]: e.target.value,
//           errors: "",
//         });
//       }
//     } else {
//       this.setState({
//         [names]: e.target.value,
//       });
//     }
//   };

//   updateHandleChange = (e) => {
//     let error = this.state.errors;
//     let updateForm = this.state.updateForm;
//     this.setState({ loading: false, buttonDisable: false });
//     if (e.target.id == "updateNote") {
//       this.setState({
//         updatenoteCharaters: 250 - e.target.value.length,
//         noteDetails: true,
//       });
//     }
//     if (e.target.id == "updateVisionAid") {
//       this.setState({
//         updatevisionAidCharaters: 250 - e.target.value.length,
//         visionAidDetails: true,
//       });
//     }
//     if (e.target.id == "updateRightEyeDetailsId") {
//       this.setState({
//         updaterightEyeCharacters: 50 - e.target.value.length,
//         ShowRightEyedetails: true,
//       });
//     }
//     if (e.target.id == "updateleftEyeDetailsId") {
//       this.setState({
//         updateLeftEyeCharacters: 50 - e.target.value.length,
//         ShowEyedetails: true,
//       });
//     }

//     if (e.target.name == "visionDate") {
//       if (
//         e.target.value > this.state.updateForm.visionDate &&
//         moment(e.target.value).format("DD MMM YYYY") !=
//           moment().format("DD MMM YYYY")
//       ) {
//         let dateMessage = "Please select the valid date.";
//         updateForm.errors = dateMessage;
//         this.setState({
//           updateForm: updateForm,
//         });
//       } else {
//         updateForm.errors = "";
//         updateForm[e.target.name] = e.target.value;
//         this.setState({
//           updateForm: updateForm,
//         });
//       }
//     } else {
//       updateForm[e.target.name] = e.target.value;
//       this.setState({
//         updateForm: updateForm,
//       });
//     }
//   };

//   handleView = (url, blobName) => {
//     url = this.state.base64;
//     blobName = this.state.fileName;
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "X-Requested-With": "XMLHttpRequest",
//       },
//     }).then((response) => {
//       response.blob().then((blob) => {
//         let url = window.URL.createObjectURL(blob);
//         let a = document.createElement("a");
//         a.href = url;
//         a.target = "_blank";
//         a.print = blobName;
//         a.click();
//       });
//     });
//   };

//   handleUpdateView = (url, blobName) => {
//     url = this.state.updateForm.base64;
//     blobName = this.state.updateForm.fileName;
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "X-Requested-With": "XMLHttpRequest",
//       },
//     }).then((response) => {
//       response.blob().then((blob) => {
//         let url = window.URL.createObjectURL(blob);
//         let a = document.createElement("a");
//         a.href = url;
//         a.target = "_blank";
//         a.print = blobName;
//         a.click();
//       });
//     });
//   };

//   uploadVisonFile = (e, updateFormFlag, index) => {
//     let fileError = this.state.fileError;
//     if (e.target.files[0].size > 104857600) {
//       if (e.target.name === "base64") {
//         fileError = "File too large";
//         this.setState({
//           fileError: fileError,
//         });
//       } else {
//         fileError = "File too large";
//         this.setState({
//           fileError: fileError,
//         });
//       }
//     }
//     if (
//       e.target.files[0].type === "image/png" ||
//       e.target.files[0].type === "application/pdf" ||
//       e.target.files[0].type === "image/jpeg" ||
//       e.target.files[0].type === "image/jpg"
//     ) {
//       if (updateFormFlag) {
//         this.props.studentVisionList.result[index].bloburl = ""
//         this.setState({
//           updateFormFileUploadFlag: true,
//         });
//       } else {
//         this.setState({
//           updateFormFileUploadFlag: false,
//         });
//       }
//       this.setState({
//         fileName: e.target.files[0].name,
//         fileType: e.target.files[0].type,
//         pdfdata: e.target.result,
//         fileTypeValidation: null,
//       });
//     } else {
//       this.setState({
//         fileName: e.target.files[0].name,
//         fileType: e.target.files[0].type,
//         pdfdata: e.target.result,
//         fileTypeValidation: "File Type Not Supported ",
//       });
//     }
//     this.Main(e.target.files[0], updateFormFlag);
//     // this.uploadPopUp();
//     e.target.value = null;
//   };
//   toBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });

//   Main = async (files, updateFormFlag) => {
//     const file = files;
//     const uploadedFile = await this.toBase64(file);
//     if (updateFormFlag) {
//       let updateForm = this.state.updateForm;

//       updateForm.base64 = uploadedFile;
//       updateForm.fileName = file.name;
//       updateForm.fileType = file.type;
//       updateForm.fileSizes = file.size / 1000;
//       this.setState({
//         updateForm: updateForm,
//       });
//     } else {
//       this.setState({
//         base64: uploadedFile,
//         fileSize: file.size / 1000,
//         // formUpload: true,
//       });
//     }
//   };
//   handlePage = (pageNumber) => {
//     this.setState({ activePage: pageNumber.selected });
//   };
//   componentDidMount() {
//     this.props.dispatch(
//       fetchStudentVisionList({ studentInformation: this.props.student })
//     );
//     this.props.dispatch(
//       visionEyeResultData({ parentid_school: getParentid_school() })
//     );
//     this.props.dispatch(
//       visionIshiharasData({ parentid_school: getParentid_school() })
//     );
//     this.props.dispatch(
//       visionScreeningOutcomeData({ parentid_school: getParentid_school() })
//     );
//     this.setPrivilageSetting();
//   }
//   componentWillReceiveProps = (props) => {
//     this.setState({
//       loading: true,
//     });
//     if (props.loading === false) {
//       this.setState({
//         loading: false,
//         buttonDisable: true,
//       });
//     }
//     if (props.visionIshiharaDatalist.length !== 0) {
//       var eyeResult = [];
//       var ishiharaResult = [];
//       var screeningResult = [];
//       props.visionIshiharaDatalist.result.visionlist.map((item, index) => {
//         if (index === 0) {
//           ishiharaResult = item.ishihara;
//         } else if (index === 1) {
//           screeningResult = item.screeningoutcome;
//         } else if (index === 2) {
//           eyeResult = item.eyeresults;
//         }
//       });
//       this.setState({
//         ishiharaArray: ishiharaResult,
//         eyeresultArray: eyeResult,
//         screeningOutcomeArray: screeningResult,
//       });
//     }
//     // if (props.visionscreeningOutcomeDatalist.length !== 0) {
//     //   this.setState({
//     //     screeningOutcomeArray: props.visionscreeningOutcomeDatalist.result.screeningoutcome,
//     //   });
//     // }
//   };

//   setPrivilageSetting = () => {
//     const privilage = getUserPrevilage();
//     privilage.map((pr) => {
//       if (pr.previlageName === "VisionScreening") {
//         JSON.parse(pr.previlageValueText).map((pValue) => {
//           if (pValue.View === 1) {
//             let privilage = { ...this.state.privilageSettings };
//             privilage.View = 1;
//             this.setState({ privilageSettings: privilage });
//           } else {
//             let privilage = { ...this.state.privilageSettings };
//             privilage.View = 0;
//             this.setState({ privilageSettings: privilage });
//           }
//           if (pValue.Add_Edit === 1) {
//             let privilage = { ...this.state.privilageSettings };
//             privilage.Add_Edit = 1;
//             this.setState({ privilageSettings: privilage });
//           } else {
//             let privilage = { ...this.state.privilageSettings };
//             privilage.Add_Edit = 0;
//             this.setState({ privilageSettings: privilage });
//           }
//         });
//       }
//     });
//     this.setState({});
//   };

//   handleValidation() {
//     let formInputs = this.state.screeningOutcome;
//     let errors = "";
//     let formIsValid = true;
//     if (formInputs === "") {
//       formIsValid = false;
//       errors = "Please Select a Value";
//     }

//     this.setState({ screeningOutcomeError: errors });
//     return formIsValid;
//   }

//   handleUpdateValidation() {
//     let formInputs = this.state.updateForm.screeningOutcome;
//     let errors = "";
//     let formIsValid = true;
//     if (formInputs === "" || formInputs === "Select") {
//       formIsValid = false;
//       errors = "Please Select a Value";
//     }

//     this.setState({ screeningOutcomeUpdateError: errors });
//     return formIsValid;
//   }

//   handleSubmit = async () => {
//     if (this.handleValidation()) {
//       let Username;
//       if (getUserToken().firstname && getUserToken().lastname) {
//         Username = getUserToken().firstname + " " + getUserToken().lastname;
//       } else {
//         Username = null;
//       }

//       let obj = {
//         visionDate: dateToUtcString(this.state.visionDate),
//         leftEye: this.state.leftEye,
//         rightEye: this.state.rightEye,
//         Ishihara: this.state.Ishihara,
//         randomDot: this.state.randomDot,
//         visionAid: this.state.visionAid,
//         screeningOutcome: this.state.screeningOutcome,
//         note: this.state.note,
//         base64: this.state.base64,
//         leftEyeDetails: this.state.leftEyeDetails,
//         rightEyeDetails: this.state.rightEyeDetails,
//         fileType: this.state.fileType,
//         fileName: this.state.fileName,
//         studentId: this.props.student,
//         currentPage: this.state.currentPage,
//         createdbyname: Username,
//         updatedbyname: Username,
//         createdbyemail: getUserToken().userName,
//         updatedbyemail: getUserToken().userName,
//       };

//       this.setState({
//         visible: false,
//         note: "",
//         base64: "",
//         leftEyeDetails: "",
//         rightEyeDetails: "",
//         fileName: "",
//         fileType: "",
//         fileSize: 0,
//         visionDate: new Date(),
//         leftEye: "",
//         rightEye: "",
//         Ishihara: "",
//         randomDot: "",
//         visionAid: "",
//         screeningOutcome: "",
//         updateFormFileUploadFlag: false,
//         loading: true,
//       });

//       const idObj = {
//         student_id: this.props.student,
//         documentType: "",
//         schoolYear: "",
//         id_provider: "",
//         documentTypeName: "",
//       };

//       await this.props.dispatch(postStudentVisionListData(obj));
//       this.props.dispatch(postStudentMedicalHistorySelect(idObj));
//       this.props.dispatch(
//         fetchStudentVisionList({ studentInformation: this.props.student })
//       );
//       this.setState({ loading: false });
//       toast.success("Vision Details Saved Successfully", {
//         autoClose: 4000,
//       });
//     }
//   };

//   handleDelete = () => {
//     this.setState({
//       base64: "",
//       fileName: "",
//       fileType: "",
//       fileSize: "",
//     });
//   };

//   handledeleteUpdate = (index) => {
//     this.state.updateForm.base64 = ""
//     this.state.updateForm.fileName = ""
//     this.state.updateForm.fileType = ""
//     this.props.studentVisionList.result[index].bloburl = ""
//     this.props.studentVisionList.result[index].documentname = ""
//     this.setState({
//       base64: "",
//       fileName: "",
//       fileType: "",
//       fileSize: "",
//     });
//   };

//   updateHandleSubmit = async (visionList) => {
//     if (this.handleUpdateValidation()) {
//       this.setState({ loading: true });
//       let updateObj = {
//         visionDate: dateToUtcString(this.state.visionEditDate),
//         leftEye: this.state.updateForm.leftEye,
//         rightEye: this.state.updateForm.rightEye,
//         Ishihara: this.state.updateForm.Ishihara,
//         randomDot: this.state.updateForm.randomDot,
//         visionAid: this.state.updateForm.visionAid,
//         screeningOutcome: this.state.updateForm.screeningOutcome,
//         note: this.state.updateForm.note,
//         base64: this.state.updateForm.base64,
//         leftEyeDetails: this.state.updateForm.leftEyeDetails,
//         rightEyeDetails: this.state.updateForm.rightEyeDetails,
//         fileName: this.state.updateForm.fileName,
//         fileType: this.state.updateForm.fileType,
//         id: visionList._id,
//         studentId: this.props.student,
//       };
//       this.setState({
//         fileName: "",
//         fileType: "",
//         visibleView: false,
//         updateForm: {
//           visionDate: "",
//           leftEye: "",
//           rightEye: "",
//           Ishihara: "Passed",
//           randomDot: "",
//           visionAid: "",
//           screeningOutcome: "",
//           note: "",
//           base64: "",
//           leftEyeDetails: "",
//           rightEyeDetails: "",
//           fileName: "",
//           fileType: "",
//           errors: "",
//           screeningOutcomeError: "",
//           screeningOutcomeUpdateError: "",
//           pdfdata: "",
//           fileSizes: 0,
//           loading: true,
//         },
//       });
//       await this.props.dispatch(postUpdateStudentVisionListData(updateObj));
//       await this.props.dispatch(
//         fetchStudentVisionList({ studentInformation: this.props.student })
//       );
//       this.setState({ loading: false });
//       toast.success("Vision Screening Updated Successfully", {
//         autoClose: 4000,
//       });
//     }
//   };
//   componentDidUpdate(prevProps) {
//     if (
//       prevProps.studentVisionList !== this.props.studentVisionList &&
//       prevProps.studentVisionList.length === 0
//     ) {
//     }
//   }

//   changeCurrentPage = (number) => {
//     let currentPage = number;
//     this.setState({ currentPage: currentPage });
//     let obj = {
//       studentInformation: this.props.student,
//       currentPage: currentPage,
//     };
//     this.props.dispatch(fetchStudentVisionList(obj));
//   };

//   render() {
//     const { t } = this.props;
//     const privilage = getUserPrevilage();
//     let total = this.props.studentVisionList.count;
//     const filedata = this.state.updateForm.base64;
//     let eyeresult = this.state.eyeresultArray.map((item, index) => {
//       return <option value={item.resultname}>{item.resultname}</option>;
//     });

//     let ishiharasResult = this.state.ishiharaArray.map((item, index) => {
//       return <option value={item.title}>{item.title}</option>;
//     });

//     let screeningOutcomeResult = this.state.screeningOutcomeArray.map(
//       (item, index) => {
//         return (
//           <option value={item.screeningoutcome}>{item.screeningoutcome}</option>
//         );
//       }
//     );

//     return (
//       <>
//         {/* <div
//           className="card-1"
//           data-toggle="modal"
//           data-target="#visionModal"
//           onClick={this.modalShow}
//         >
//           <img
//             src={view}
//             className="noun-eye vision-img-mt"
//             alt="noun-eye"
//           />
//           <h1>Vision</h1>
//         </div> */}
//         {privilage.map((pr) => {
//           if (pr.previlageName === "VisionScreening") {
//             return JSON.parse(pr.previlageValueText).map((pValue) => {
//               if (pValue.View === 1) {
//                 return (
//                   <div
//                     className="card-1"
//                     data-toggle="modal"
//                     data-target="#visionModal"
//                     onClick={this.modalShow}
//                   >
//                     <img
//                       src={view}
//                       className="noun-eye vision-img-mt"
//                       alt="noun-eye"
//                     />
//                     <h1>{t("Vision")}</h1>
//                     {/* <p>24.12.2020</p> */}
//                   </div>
//                 );
//               }
//             });
//           } else {
//             return null;
//           }
//         })}

//         <Modal
//           className="modal visionchekbox health-form-modal modalZIndex health-view-modal medication-view-modal parent-modal single-column fade"
//           id="visionModal"
//           tabIndex={-1}
//           show={this.state.show}
//           role="dialog"
//           onHide={this.modalHide}
//           aria-labelledby="visionModalLabel"
//           aria-hidden="true"
//         >
//           <div
//             className="studentVisitList vision-modal-content"
//             role="document"
//           >
//             <div className="visionModalDivcss">
//               <div className="modal-header custheader">
//                 <h5 className="modal-title" id="scololiosisModalLabel">
//                   {t("Vision Screening")}
//                 </h5>

//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={this.modalHide}
//                 ></button>

//                 {this.state.privilageSettings.Add_Edit === 1 ? (
//                   <p
//                     className={
//                       this.state.visible ? "add-screen up-arrow" : "add-screen"
//                     }
//                     style={{ cursor: "pointer" }}
//                     onClick={() => this.openModal()}
//                   >
//                     {t("Add New Screening")}{" "}
//                   </p>
//                 ) : (
//                   <>
//                     <ReactTooltip id="Visionadd">
//                       <p>
//                         {t(
//                           "You don't have Permission. Please Contact the Administrator."
//                         )}
//                       </p>
//                     </ReactTooltip>
//                     <p
//                       className={
//                         this.state.visible
//                           ? "add-screen up-arrow"
//                           : "add-screen"
//                       }
//                       style={{ cursor: "pointer" }}
//                       data-tip
//                       data-for="Visionadd"
//                     >
//                       {t("Add New Screening")}{" "}
//                     </p>
//                   </>
//                 )}
//               </div>
//               <Modal.Body className="modal-body pt-0">
//                 <div className=" modal-body-vision pt-0 text-allign-vision1">
//                   {this.state.visible && (
//                     <div className="form-main clearfix">
//                       <div class="modal-form-division vision-display-modal">
//                         <div className="container-fluid">
//                           <div>
//                             <div className="row">
//                               <div className="general col-6">
//                                 <p className="mb-0">
//                                   <strong>
//                                     <small>{t("General Details")}</small>
//                                   </strong>
//                                 </p>
//                               </div>

//                               <div className="vision-display-flex">
//                                 <div class="col-6 my-6">
//                                   <p className="mb-0">
//                                     <span className="text-muted">
//                                       <small className="vision-f-w">
//                                         {t("Date Screening Provided")}
//                                         <span class="asterisk">*</span>
//                                       </small>
//                                     </span>
//                                   </p>
//                                 </div>

//                                 <div class="col-7 my-7">
//                                   <div class="eduhealthinputdiv">
//                                     <DatePicker
//                                       className="form-control eduhealthinput dateviewcss"
//                                       id="medicineExpDate"
//                                       name="visionDate"
//                                       placeholderText="dd mmm yyyy"
//                                       selected={this.state.visionDate}
//                                       onChange={this.handleDateTimeInChange}
//                                       showTimeInput
//                                       maxDate={new Date()}
//                                       timeIntervals={1}
//                                       timeCaption="time"
//                                       timeFormat="HH:mm"
//                                       dateFormat="dd MMM yyyy h:mm aa"
//                                     />
//                                   </div>
//                                   <span className="vision-display-red">
//                                     {this.state.errors}
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="general col-6">
//                                 <p className="mb-0">
//                                   <strong>
//                                     <small>{t("Vision Details")}</small>
//                                   </strong>
//                                 </p>
//                               </div>
//                               <div className="col-12 my-12 vision-display-flex">
//                                 <div class="col-4 my-4 pl-1">
//                                   <div className="form-row">
//                                     <label>{t("Left Eye")}</label>
//                                     <select
//                                       className="eduhealthselect form-control mr-0"
//                                       id="medicineFormData"
//                                       name="leftEye"
//                                       onChange={this.handleChange}
//                                     >
//                                       <option>Select</option>
//                                       {eyeresult}
//                                     </select>
//                                   </div>
//                                 </div>

//                                 <div className="col-4 my-4">
//                                   <div className="form-row">
//                                     <label>{t("Left Eye Details")}</label>

//                                     <input
//                                       type="text"
//                                       maxlength="50"
//                                       className="form-control mr-0 h-33 !important visonText"
//                                       name="leftEyeDetails"
//                                       id="leftEyeDetailsId"
//                                       placeholder
//                                       onChange={this.handleChange}
//                                       onMouseLeave={() =>
//                                         this.setState({
//                                           ShowEyedetails: false,
//                                         })
//                                       }
//                                     />
//                                     {this.state.ShowEyedetails == true && (
//                                       <p className="f-13">
//                                         <small>
//                                           {this.state.LeftEyeCharacters}{" "}
//                                           {t("Characters Left")}
//                                         </small>
//                                       </p>
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="col-12 my-12 vision-display-flex">
//                                 <div class="col-4 my-4 pl-1">
//                                   <div className="form-row">
//                                     <label>{t("Right Eye")}</label>
//                                     <select
//                                       className="eduhealthselect form-control mr-0"
//                                       id="medicineFormData"
//                                       name="rightEye"
//                                       onChange={this.handleChange}
//                                     >
//                                       <option>Select</option>
//                                       {eyeresult}
//                                     </select>
//                                   </div>
//                                 </div>

//                                 <div className="col-4 my-4">
//                                   <div className="form-row">
//                                     <label>{t("Right Eye Details")}</label>

//                                     <input
//                                       type="text"
//                                       maxlength="50"
//                                       className="form-control mr-0 visonText"
//                                       name="rightEyeDetails"
//                                       onChange={this.handleChange}
//                                       id="RightEyeDetailsId"
//                                       placeholder
//                                       onMouseLeave={() =>
//                                         this.setState({
//                                           ShowRightEyedetails: false,
//                                         })
//                                       }
//                                     />
//                                     {this.state.ShowRightEyedetails == true && (
//                                       <p className="f-13">
//                                         <small>
//                                           {this.state.rightEyeCharacters}{" "}
//                                           {t("Characters Left")}
//                                         </small>
//                                       </p>
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>

//                               <div className="col-12 my-12 vision-display-flex">
//                                 <div class="col-4 my-4 pl-1">
//                                   <div className="form-row">
//                                     <label>{t("Ishihara")}</label>
//                                     <select
//                                       className="eduhealthselect form-control mr-0"
//                                       id="medicineFormData"
//                                       name="Ishihara"
//                                       onChange={this.handleChange}
//                                     >
//                                       <option>Select</option>
//                                       {ishiharasResult}
//                                     </select>
//                                   </div>
//                                 </div>

//                                 <div class="col-4 my-4">
//                                   <div className="form-row">
//                                     <label>{t("Random-Dot E")} </label>
//                                     <select
//                                       className="eduhealthselect form-control mr-0"
//                                       id="medicineFormData"
//                                       name="randomDot"
//                                       onChange={this.handleChange}
//                                     >
//                                       {this.getMedicineFormDropDown()}
//                                     </select>
//                                   </div>
//                                 </div>
//                               </div>

//                               <div className="col-12 my-12 vision-display-flex">
//                                 <div class="col-8 my-4  pl-1">
//                                   <div className="form-row">
//                                     <label
//                                       htmlFor="medicineFormData"
//                                       className="form-label mb-1"
//                                     >
//                                       {t("Vision Aid")}{" "}
//                                     </label>
//                                     <textarea
//                                       className="form-control addNotecss"
//                                       maxlength="250"
//                                       id="medicineFormData"
//                                       name="visionAid"
//                                       defaultValue={""}
//                                       onChange={this.handleChange}
//                                       onMouseLeave={() =>
//                                         this.setState({
//                                           visionAidDetails: false,
//                                         })
//                                       }
//                                     />
//                                     {this.state.visionAidDetails == true && (
//                                       <p className="f-13">
//                                         <small>
//                                           {this.state.visionAidCharaters}{" "}
//                                           Characters Left
//                                         </small>
//                                       </p>
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="screen-detail health-form-modal">
//                               <div class="col-4 my-4 pl-1">
//                                 <div className="form-row">
//                                   <p className="mb-1">
//                                     <b>
//                                       <small>
//                                         {" "}
//                                         {t("Screening Outcome")}
//                                         <span class="asterisk">*</span>
//                                       </small>
//                                     </b>
//                                   </p>
//                                   <select
//                                     className="eduhealthselect form-control mr-0"
//                                     id="screeningoutcome"
//                                     name="screeningOutcome"
//                                     onChange={this.handleChange}
//                                   >
//                                     <option>Select</option>
//                                     {screeningOutcomeResult}
//                                   </select>
//                                   <span className="error_font">
//                                     {this.state.screeningOutcomeError}
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="clearfix noteDivcss vision-display-pr">
//                                 <div className="mb-2 mt-2 wid-100 form-inpit-div">
//                                   <label
//                                     htmlFor="desc"
//                                     className="form-label mb-1"
//                                   >
//                                     <p className="p-note-class">{t("Note")}</p>
//                                   </label>
//                                   <textarea
//                                     className="form-control addNotecss"
//                                     maxlength="250"
//                                     id="desc"
//                                     name="note"
//                                     defaultValue={""}
//                                     onChange={this.handleChange}
//                                     onMouseLeave={() =>
//                                       this.setState({
//                                         noteDetails: false,
//                                       })
//                                     }
//                                   />
//                                   {this.state.noteDetails == true && (
//                                     <p className="f-13">
//                                       <small>
//                                         {this.state.noteCharaters}{" "}
//                                         {t("Characters Left")}
//                                       </small>
//                                     </p>
//                                   )}
//                                 </div>

//                                 <div className="mb-2 mt-5 form-inpit-div fileUploadDivcss">
//                                   <div
//                                     className="upload-btn-wrapper upload-with-icon_vi w-100"
//                                     data-tip
//                                     data-for="FileSizeIds"
//                                   >
//                                     <button className="btn">
//                                       <img src={folder} alt="upload" />{" "}
//                                       <a className="fileName-vision">
//                                         {" "}
//                                         {this.state.fileName &&
//                                         this.state.updateFormFileUploadFlag ==
//                                           false
//                                           ? this.state.fileName.slice(0, 20)+ "..."
//                                           : "Drag your file here or  BROWSE"}{" "}
//                                          {this.state.fileSize
//                                           ? this.state.fileSize && (
//                                               <ReactTooltip
//                                                 id="FileSizeIds"
//                                                 className="reactToolTip"
//                                               >
//                                                 {this.state.fileName &&
//                                                 this.state
//                                                   .updateFormFileUploadFlag ==
//                                                   false
//                                                   ? this.state.fileName
//                                                   : "Drag your file here or  BROWSE"}
//                                                 {this.state.fileSize ? (
//                                                   <span>
//                                                     {this.state.fileSize}KB
//                                                   </span>
//                                                 ) : (
//                                                   "No file"
//                                                 )}
//                                               </ReactTooltip>
//                                             )
//                                           : null}
//                                       </a>
//                                     </button>
//                                     <input
//                                       id="input-file-4 vision-file-uploadmargin"
//                                       className="vision-base-mt"
//                                       type="file"
//                                       title={this.state.fileName}
//                                       name="base64"
//                                       onChange={(e) =>
//                                         this.uploadVisonFile(e, false)
//                                       }
//                                     />
//                                     <span className="vision-display-red">
//                                       {this.state.fileError}
//                                     </span>
//                                   </div>

//                                   <span className="fileName-4 vision-display-mlview">
//                                     {this.state.base64 ? (
//                                       <span className="viewFilecss">
//                                         <a
//                                           name="view"
//                                           className="view-color"
//                                           onClick={this.handleView}
//                                         >
//                                           {t("View file")}{" "}
//                                         </a>

//                                         <button
//                                           type="button"
//                                           disabled={this.state.errors}
//                                           className="btn btn-secondary buttonmargin"
//                                           onClick={this.handleDelete}
//                                         >
//                                           {t("Delete File")}
//                                         </button>
//                                       </span>
//                                     ) : null}
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="form-footer  mt-4">
//                                 <button
//                                   type="button"
//                                   disabled={this.state.errors}
//                                   className="btn btn-secondary"
//                                   onClick={this.handleSubmit}
//                                   disabled={!this.state.visionDate}
//                                 >
//                                   {t("SUBMIT")}{" "}
//                                   {this.props.loading && (
//                                     <i className="fa fa-spinner fa-spin"></i>
//                                   )}
//                                 </button>
//                                 <button
//                                   type="button"
//                                   className="btn btn-primary cancel-button"
//                                   onClick={() => this.openModal()}
//                                 >
//                                   {t("CANCEL")}
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <div className="form-main clearfix">
//                     <div>
//                       <div className="container-fluid">
//                         {this.props.studentVisionList.result &&
//                         this.props.studentVisionList.result.length > 0 ? (
//                           this.props.studentVisionList.result &&
//                           this.props.studentVisionList.result
//                             // .slice(offset, offset + PER_PAGE)
//                             .map((visionList, index) => (
//                               <ul className="files-row vision-file-list">
//                                 <li className="studentVisionList-list">
//                                   <div className="file-div">
//                                     <div className="d-flex jus-space">
//                                       <div>
//                                         <div className="d-flex">
//                                           <a
//                                             tabindex={index}
//                                             onClick={() => this.closeModal1()}
//                                             // href="#"
//                                             className={
//                                               visionList.screeningoutcome ==
//                                               "Failed" ||  visionList.screeningoutcome ==
//                                               "Fail"  ? "notgood ml-0" 
//                                                       : "good ml-0"
//                                             }
//                                           >
//                                             {visionList.screeningoutcome ==
//                                             "Intervention"
//                                               ? "Doctor Intervention Needed"
//                                               : visionList.screeningoutcome}
//                                           </a>
//                                           {visionList.bloburl ? (
//                                             <span>
//                                               <img
//                                                 className="vision-blobicon"
//                                                 src={attachement}
//                                               />
//                                             </span>
//                                           ) : null}
//                                         </div>
//                                         <p>
//                                           <img src={noun_schedule} /> &nbsp;{" "}
//                                           <span>
//                                             {visionList.visionreferaldate
//                                               ? utcToDateString(
//                                                   visionList.visionreferaldate,"YYYY-MM-DD,h:mm:ss a","DD MMM YYYY h:mm a")
//                                               : ""}
//                                           </span>
//                                         </p>
                                       
//                                           <p>
//                                             <span className="text-muted visionspan">
//                                               Created By:
//                                             </span>
//                                             <span className="visionspan">
//                                               {" "}
//                                               {visionList.createdbyname}{" "}
//                                             </span>
//                                           </p>

//                                         <div className="details-wrap-btns">
//                                           {visionList.lefteyeresult ? (
//                                             <button className="btn btn-light-blue visionspan">
//                                               Left Eye:{" "}
//                                               <span>
//                                                 {visionList.lefteyeresult}
//                                               </span>
//                                             </button>
//                                           ) : null}
//                                           {visionList.righteyeresult ? (
//                                             <button className="btn btn-light-blue visionspan">
//                                               Right Eye:{" "}
//                                               <span>
//                                                 {visionList.righteyeresult}
//                                               </span>
//                                             </button>
//                                           ) : null}
//                                         </div>
//                                         {visionList.visionaid ? (
//                                           <p>
//                                             <span className="text-muted visionspan">
//                                               Vision Aid:
//                                             </span>
//                                             <span
//                                               className="visionspan"
//                                               data-for={visionList._id}
//                                               data-tip={visionList.visionaid}
//                                             >
//                                               {" "}
//                                               {/* {visionList.visionaid}{" "} */}
//                                               {visionList.visionaid.slice(
//                                                 0,
//                                                 50
//                                               )}...
//                                             </span>
//                                             <ReactTooltip
//                                               id={visionList._id}
//                                               className="reactToolTip dental-tootltip"
//                                               html={true}
//                                               multiline={true}
//                                             />
//                                           </p>
//                                         ) : null}
//                                         {visionList.ishihara ? (
//                                           <p>
//                                             <span className="text-muted visionspan">
//                                               Ishihara:
//                                             </span>
//                                             <span className="visionspan">
//                                               {" "}
//                                               {visionList.ishihara}{" "}
//                                             </span>
//                                           </p>
//                                         ) : null}
//                                         {visionList.note ? (
//                                           <p>
//                                             <span className="text-muted visionspan">
//                                               Note:
//                                             </span>
//                                             <span
//                                               className="visionspan"
//                                               data-for={visionList._id}
//                                               data-tip={visionList.note}
//                                             >
//                                               {" "}
//                                               {visionList.note.slice(0, 50)}...
//                                             </span>
//                                             <ReactTooltip
//                                               id={visionList._id}
//                                               className="reactToolTip dental-tootltip"
//                                               html={true}
//                                               multiline={true}
//                                             />
//                                           </p>
//                                         ) : null}
//                                       </div>
//                                       <div
//                                         className="close-view vision-display-mview"
//                                         onClick={() =>
//                                           this.openModalViewnew(visionList)
//                                         }
//                                       >
//                                         <a
//                                           // href="#"
//                                           className="view"
//                                           style={{
//                                             color:
//                                               this.state.visibleView ==
//                                               visionList._id
//                                                 ? "black"
//                                                 : "black",
//                                           }}
//                                         >
//                                           {this.state.visibleView ==
//                                           visionList._id
//                                             ? "Close"
//                                             : "Edit"}
//                                         </a>
//                                       </div>
//                                     </div>
//                                     {this.state.visibleView ==
//                                       visionList._id && (
//                                       <div className="form-main clearfix">
//                                         <div class="modal-form-division">
//                                           <div className="container-fluid">
//                                             <div
//                                               // className="health-form-modal"
//                                               id="visionModal"
//                                               tabIndex={-1}
//                                               role="dialog"
//                                               aria-labelledby="visionModalLabel"
//                                               aria-hidden="true"
//                                             >
//                                               <div className="row">
//                                                 <div className="general col-6">
//                                                   <p className="mb-0">
//                                                     <strong className="editvision-view">
//                                                       <small>
//                                                         {t("General Details")}
//                                                       </small>
//                                                     </strong>
//                                                   </p>
//                                                 </div>
//                                                 <div className="vision-display-flex">
//                                                   <div class="col-7 my-6">
//                                                     <p className=" mr-0">
//                                                       <span className="text-muted">
//                                                         <small className="vision-display-mrdate vision-f-w editvision-view-date">
//                                                           {t(
//                                                             "Date Screening Provided"
//                                                           )}
//                                                           <span class="asterisk">
//                                                             *
//                                                           </span>
//                                                         </small>
//                                                       </span>
//                                                     </p>
//                                                   </div>

//                                                   <div class="col-6 my-6 vision-display-pdate">
//                                                     <div class="eduhealthinputdiv">
//                                                       <DatePicker
//                                                         className="eduhealthinput form-control visiondate-edit updateDatecss"
//                                                         id="visionDate"
//                                                         name="visionDate"
//                                                         placeholderText="dd mmm yyyy"
//                                                         selected={
//                                                           this.state
//                                                             .visionEditDate
//                                                         }
//                                                         disabled={true}
//                                                         onChange={
//                                                           this
//                                                             .handleDateTimeInChanged
//                                                         }
//                                                         showTimeInput
//                                                         maxDate={new Date()}
//                                                         timeIntervals={1}
//                                                         timeCaption="time"
//                                                         timeFormat="HH:mm"
//                                                         dateFormat="dd MMM yyyy h:mm aa"
//                                                       />
//                                                     </div>
//                                                     <span className="vision-display-red">
//                                                       {
//                                                         this.state.updateForm
//                                                           .errors
//                                                       }
//                                                     </span>
//                                                   </div>
//                                                 </div>
//                                                 <div className="general col-6">
//                                                   <p className="mb-0">
//                                                     <strong className="editvision-view">
//                                                       <small>
//                                                         {t("Vision Details")}
//                                                       </small>
//                                                     </strong>
//                                                   </p>
//                                                 </div>
//                                                 <div className="col-12 my-12 vision-display-flex">
//                                                   <div class="col-4 my-4 pl-1">
//                                                     <div className="form-row">
//                                                       <label>
//                                                         {t("Left Eye")}
//                                                       </label>
//                                                       <select
//                                                         className="eduhealthselect form-control mr-0"
//                                                         id="medicineFormData"
//                                                         name="leftEye"
//                                                         value={
//                                                           this.state.updateForm
//                                                             .leftEye
//                                                         }
//                                                         disabled={true}
//                                                         onChange={
//                                                           this
//                                                             .updateHandleChange
//                                                         }
//                                                         // disabled={
//                                                         //   this.state
//                                                         //     .privilageSettings
//                                                         //     .Add_Edit == 1
//                                                         //     ? false
//                                                         //     : true
//                                                         // }
//                                                       >
//                                                         <option>Select</option>

//                                                         {eyeresult}
//                                                       </select>
//                                                     </div>
//                                                   </div>

//                                                   <div className="col-4 my-4">
//                                                     <div className="form-row">
//                                                       <label>
//                                                         {t("Left Eye Details")}
//                                                       </label>
//                                                       <input
//                                                         type="text"
//                                                         maxlength="50"
//                                                         className="form-control mr-0 visonText"
//                                                         name="leftEyeDetails"
//                                                         id="updateleftEyeDetailsId"
//                                                         disabled={true}
//                                                         value={
//                                                           this.state.updateForm
//                                                             .leftEyeDetails
//                                                         }
//                                                         placeholder
//                                                         onChange={
//                                                           this
//                                                             .updateHandleChange
//                                                         }
//                                                         onMouseLeave={() =>
//                                                           this.setState({
//                                                             ShowEyedetails: false,
//                                                           })
//                                                         }
//                                                         // disabled={
//                                                         //   this.state
//                                                         //     .privilageSettings
//                                                         //     .Add_Edit == 1
//                                                         //     ? false
//                                                         //     : true
//                                                         // }
//                                                       />
//                                                       {this.state
//                                                         .ShowEyedetails ==
//                                                         true && (
//                                                         <p className="f-13">
//                                                           <small>
//                                                             {
//                                                               this.state
//                                                                 .updateLeftEyeCharacters
//                                                             }{" "}
//                                                             {t(
//                                                               "Characters Left"
//                                                             )}
//                                                           </small>
//                                                         </p>
//                                                       )}
//                                                     </div>
//                                                   </div>
//                                                 </div>
//                                                 <div className="col-12 my-12 vision-display-flex">
//                                                   <div class="col-4 my-4 pl-1">
//                                                     <div className="form-row">
//                                                       <label>
//                                                         {t("Right Eye")}
//                                                       </label>
//                                                       <select
//                                                         className="eduhealthselect form-control mr-0"
//                                                         id="medicineFormData"
//                                                         name="rightEye"
//                                                         value={
//                                                           this.state.updateForm
//                                                             .rightEye
//                                                         }
//                                                         disabled={true}
//                                                         onChange={
//                                                           this
//                                                             .updateHandleChange
//                                                         }
//                                                         // disabled={
//                                                         //   this.state
//                                                         //     .privilageSettings
//                                                         //     .Add_Edit == 1
//                                                         //     ? false
//                                                         //     : true
//                                                         // }
//                                                       >
//                                                         <option>Select</option>

//                                                         {eyeresult}
//                                                       </select>
//                                                     </div>
//                                                   </div>

//                                                   <div className="col-4 my-4">
//                                                     <div className="form-row">
//                                                       <label>
//                                                         {t("Right Eye Details")}
//                                                       </label>
//                                                       <input
//                                                         type="text"
//                                                         maxlength="50"
//                                                         className="form-control mr-0 visonText"
//                                                         name="rightEyeDetails"
//                                                         value={
//                                                           this.state.updateForm
//                                                             .rightEyeDetails
//                                                         }
//                                                         disabled={true}
//                                                         onChange={
//                                                           this
//                                                             .updateHandleChange
//                                                         }
//                                                         id="updateRightEyeDetailsId"
//                                                         placeholder
//                                                         onMouseLeave={() =>
//                                                           this.setState({
//                                                             ShowRightEyedetails: false,
//                                                           })
//                                                         }
//                                                         // disabled={
//                                                         //   this.state
//                                                         //     .privilageSettings
//                                                         //     .Add_Edit == 1
//                                                         //     ? false
//                                                         //     : true
//                                                         // }
//                                                       />
//                                                       {this.state
//                                                         .ShowRightEyedetails ==
//                                                         true && (
//                                                         <p className="f-13">
//                                                           <small>
//                                                             {
//                                                               this.state
//                                                                 .updaterightEyeCharacters
//                                                             }{" "}
//                                                             {t(
//                                                               "Characters Left"
//                                                             )}
//                                                           </small>
//                                                         </p>
//                                                       )}{" "}
//                                                     </div>
//                                                   </div>
//                                                 </div>

//                                                 <div className="col-12 my-12 vision-display-flex">
//                                                   <div class="col-4 my-4 pl-1">
//                                                     <div className="form-row">
//                                                       <label>
//                                                         {t("Ishihara")}
//                                                       </label>
//                                                       <select
//                                                         className="eduhealthselect form-control mr-0"
//                                                         id="medicineFormData"
//                                                         name="Ishihara"
//                                                         disabled={true}
//                                                         value={
//                                                           this.state.updateForm
//                                                             .Ishihara
//                                                         }
//                                                         onChange={
//                                                           this
//                                                             .updateHandleChange
//                                                         }
//                                                         // disabled={
//                                                         //   this.state
//                                                         //     .privilageSettings
//                                                         //     .Add_Edit == 1
//                                                         //     ? false
//                                                         //     : true
//                                                         // }
//                                                       >
//                                                         <option>Select</option>
//                                                         {ishiharasResult}
//                                                       </select>
//                                                     </div>
//                                                   </div>
//                                                   <div class="col-4 my-4">
//                                                     <div className="form-row">
//                                                       <label>
//                                                         {t("Random-Dot E")}{" "}
//                                                       </label>
//                                                       <select
//                                                         className="eduhealthselect form-control mr-0"
//                                                         id="medicineFormData"
//                                                         name="randomDot"
//                                                         disabled={true}
//                                                         value={
//                                                           this.state.updateForm
//                                                             .randomDot
//                                                         }
//                                                         onChange={
//                                                           this
//                                                             .updateHandleChange
//                                                         }
//                                                         // disabled={
//                                                         //   this.state
//                                                         //     .privilageSettings
//                                                         //     .Add_Edit == 1
//                                                         //     ? false
//                                                         //     : true
//                                                         // }
//                                                       >
//                                                         {this.getMedicineFormDropDown()}
//                                                       </select>
//                                                     </div>
//                                                   </div>
//                                                 </div>

//                                                 <div className="col-12 my-12 vision-display-flex">
//                                                   <div class="col-8 my-4 pl-1">
//                                                     <div className="form-row">
//                                                       <label htmlFor="medicineFormData">
//                                                         {t("Vision Aid")}{" "}
//                                                       </label>
//                                                       <textarea
//                                                         className="eduhealthselect form-control mr-0 noteUpdateDivcss"
//                                                         maxlength="250"
//                                                         id="medicineFormData"
//                                                         name="visionAid"
//                                                         id="updateVisionAid"
//                                                         disabled={true}
//                                                         value={
//                                                           this.state.updateForm
//                                                             .visionAid
//                                                         }
//                                                         onChange={
//                                                           this
//                                                             .updateHandleChange
//                                                         }
//                                                         onMouseLeave={() =>
//                                                           this.setState({
//                                                             visionAidDetails: false,
//                                                           })
//                                                         }
//                                                         // disabled={
//                                                         //   this.state
//                                                         //     .privilageSettings
//                                                         //     .Add_Edit == 1
//                                                         //     ? false
//                                                         //     : true
//                                                         // }
//                                                       />
//                                                       {this.state
//                                                         .visionAidDetails ==
//                                                         true && (
//                                                         <p className="f-13">
//                                                           <small>
//                                                             {
//                                                               this.state
//                                                                 .updatevisionAidCharaters
//                                                             }{" "}
//                                                             {t(
//                                                               "Characters Left"
//                                                             )}
//                                                           </small>
//                                                         </p>
//                                                       )}
//                                                     </div>
//                                                   </div>
//                                                 </div>
//                                               </div>
//                                               <div className="screen-detail health-form-modal">
//                                                 <div class="col-4 my-4 pl-1">
//                                                   <div className="form-row">
//                                                     <p className="mb-1">
//                                                       <b>
//                                                         <small className="editvision-view-sm">
//                                                           {" "}
//                                                           {t(
//                                                             "Screening Outcome"
//                                                           )}
//                                                           <span class="asterisk">
//                                                             *
//                                                           </span>
//                                                         </small>
//                                                       </b>
//                                                     </p>
//                                                     <select
//                                                       className="eduhealthselect form-control mr-0"
//                                                       id="screeningoutcome"
//                                                       name="screeningOutcome"
//                                                       value={
//                                                         this.state.updateForm
//                                                           .screeningOutcome
//                                                       }
//                                                       disabled={true}
//                                                       onChange={
//                                                         this.updateHandleChange
//                                                       }
//                                                     >
//                                                       <option>Select</option>
//                                                       {screeningOutcomeResult}
//                                                     </select>
//                                                     <span className="error_font">
//                                                       {
//                                                         this.state
//                                                           .screeningOutcomeUpdateError
//                                                       }
//                                                     </span>
//                                                   </div>
//                                                 </div>
//                                                 <div className="clearfix vision-display-doctor">
//                                                   <div className="mb-2 mt-3 wid-100 form-inpit-div noteUpdatecss vision-display-doctordiv">
//                                                     <label
//                                                       htmlFor="desc"
//                                                       className="form-label mb-1 vision-fontnote-size"
//                                                     >
//                                                       <p className="p-note-class">
//                                                         {t("Note")}
//                                                       </p>
//                                                     </label>
//                                                     <textarea
//                                                       className="form-control mt-2 noteUpdateDivcss"
//                                                       id="desc"
//                                                       maxlength="250"
//                                                       name="note"
//                                                       id="updateNote"
//                                                       defaultValue={""}
//                                                       value={
//                                                         this.state.updateForm
//                                                           .note
//                                                       }
//                                                       onChange={
//                                                         this.updateHandleChange
//                                                       }
//                                                       onMouseLeave={() =>
//                                                         this.setState({
//                                                           noteDetails: false,
//                                                         })
//                                                       }
//                                                       disabled={
//                                                         this.state
//                                                           .privilageSettings
//                                                           .Add_Edit == 1
//                                                           ? false
//                                                           : true
//                                                       }
//                                                     />

//                                                     {this.state.noteDetails ==
//                                                       true && (
//                                                       <p className="f-13">
//                                                         <small>
//                                                           {
//                                                             this.state
//                                                               .updatenoteCharaters
//                                                           }{" "}
//                                                           {t("Characters Left")}
//                                                         </small>
//                                                       </p>
//                                                     )}
//                                                   </div>

//                                                   <div
//                                                     class="upload-btn-wrapper upload-with-icon_vi w-50 mt-5"
//                                                     data-tip
//                                                     data-for="FileSizeId"
//                                                   >
//                                                     <button class="btn">
//                                                       <img
//                                                         src={folder}
//                                                         alt="upload"
//                                                       />{" "}
//                                                       <a class="fileName-vision">
//                                                         {this.state.updateForm
//                                                           .fileName
//                                                           ? this.state.updateForm.fileName.slice(
//                                                               0,
//                                                               20
//                                                             )
//                                                           : visionList.documentname
//                                                           ? visionList.documentname.slice(
//                                                               0,
//                                                               20
//                                                             )
//                                                           : "Drag your file here or  BROWSE"}
//                                                         {this.state.updateForm
//                                                           .fileSizes > 0 && (
//                                                           <ReactTooltip
//                                                             id="FileSizeId"
//                                                             className="reactToolTip"
//                                                           >
//                                                             {this.state
//                                                               .updateForm
//                                                               .fileName
//                                                               ? this.state
//                                                                   .updateForm
//                                                                   .fileName
//                                                               : visionList.documentname
//                                                               ? visionList.documentname.slice(
//                                                                   0,
//                                                                   20
//                                                                 )
//                                                               : "Drag your file here or  BROWSE"}
//                                                             {this.state
//                                                               .updateForm
//                                                               .fileSizes > 0 ? (
//                                                               <span>
//                                                                 {
//                                                                   this.state
//                                                                     .updateForm
//                                                                     .fileSizes
//                                                                 }
//                                                                 KB
//                                                               </span>
//                                                             ) : (
//                                                               "No file"
//                                                             )}
//                                                           </ReactTooltip>
//                                                         )}
//                                                       </a>
//                                                     </button>
//                                                     <input
//                                                       id="input-file-4"
//                                                       style={{
//                                                         left: "18px!important",
//                                                       }}
//                                                       type="file"
//                                                       title={
//                                                         this.state.updateForm
//                                                           .fileName
//                                                       }
//                                                       name="base64"
//                                                       // value={this.state.updateForm.base64 ? this.state.updateForm.base64 :
//                                                       //   visionList.blobUrl}

//                                                       onChange={(e) =>
//                                                         this.uploadVisonFile(
//                                                           e,
//                                                           true,index
//                                                         )
//                                                       }
//                                                       disabled={
//                                                         this.state
//                                                           .privilageSettings
//                                                           .Add_Edit == 1
//                                                           ? false
//                                                           : true
//                                                       }
//                                                     />

//                                                     <span className="fileName-4 vision-display-mlview">
//                                                       {" "}
//                                                     </span>
//                                                     {this.state.updateForm
//                                                       .base64 ? (
//                                                       <span className="viewFilecss">
//                                                         <a
//                                                           name="view"
//                                                           className="view-color viewfileui"
//                                                           onClick={
//                                                             this
//                                                               .handleUpdateView
//                                                           }
//                                                         >
//                                                           View file
//                                                         </a>
//                                                          <button
//                                                           type="button"
//                                                           disabled={
//                                                             this.state.errors
//                                                           }
//                                                           className="visionfile-delete-btn btn-secondary buttonmargin"
//                                                           onClick={() =>
//                                                             this.handledeleteUpdate(index)
//                                                           }
//                                                         >
//                                                           {t("Delete File")}
//                                                         </button>
//                                                       </span>
//                                                     ) : visionList.documentname &&
//                                                       this.props
//                                                         .stdentVisionBlob ? (
//                                                       <span className="viewFilecss">
//                                                         <a
//                                                           name="view"
//                                                           className="view-color viewfileui"
//                                                           href={
//                                                             this.props
//                                                               .stdentVisionBlob
//                                                           }
//                                                           target="_blank"
//                                                         >
//                                                           View file
//                                                         </a>
//                                                         <button
//                                                           type="button"
//                                                           disabled={
//                                                             this.state.errors
//                                                           }
//                                                           className="visionfile-delete-btn btn-secondary"
//                                                           onClick={() =>
//                                                             this.handledeleteUpdate(index)
//                                                           }
//                                                         >
//                                                           {t("Delete File")}
//                                                         </button>
//                                                       </span>
//                                                     ) : null}
//                                                     <span className="vision-display-red">
//                                                       {this.state.fileError}
//                                                     </span>
//                                                   </div>
//                                                 </div>
//                                                 <div className="form-footer clearfix mt-4">
//                                                   {this.state.privilageSettings
//                                                     .Add_Edit === 1 ? (
//                                                     <button
//                                                       type="button"
//                                                       disabled={
//                                                         this.state.updateForm
//                                                           .errors
//                                                       }
//                                                       className="btn btn-secondary"
//                                                       onClick={() =>
//                                                         this.updateHandleSubmit(
//                                                           visionList
//                                                         )
//                                                       }
//                                                     >
//                                                       {t("UPDATE")}{" "}
//                                                       {this.props.loading && (
//                                                         <i className="fa fa-spinner fa-spin"></i>
//                                                       )}
//                                                     </button>
//                                                   ) : (
//                                                     <>
//                                                       <ReactTooltip id="visionnsubmit">
//                                                         <p className="p-submitvision">
//                                                           {t(
//                                                             "You don't have Permission. Please Contact the Administrator."
//                                                           )}
//                                                         </p>
//                                                       </ReactTooltip>
//                                                       <button
//                                                         type="button"
//                                                         className="btn btn-secondary"
//                                                         data-tip
//                                                         data-for="visionnsubmit"
//                                                         readOnly
//                                                       >
//                                                         {" "}
//                                                         {t("SUBMIT")}{" "}
//                                                       </button>
//                                                     </>
//                                                   )}

//                                                   <button
//                                                     type="button"
//                                                     className="btn btn-primary cancel-button"
//                                                     onClick={() =>
//                                                       this.openModalViewnew()
//                                                     }
//                                                   >
//                                                     {t("CANCEL")}
//                                                   </button>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     )}
//                                   </div>
//                                 </li>
//                               </ul>
//                             ))
//                         ) : (
//                           <p>No Records Found</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Modal.Body>
//             </div>
//           </div>
//           {/* <Modal.Footer> */}
//           {this.props.studentVisionList.result &&
//             this.props.studentVisionList.result.length > 0 && (
//               <div className="medpaginationmaindiv">
//                 <Pagination
//                   currentPage={this.state.currentPage}
//                   totalSize={total}
//                   sizePerPage={5}
//                   firstPageText="|⟨"
//                   lastPageText="⟩|"
//                   showFirstLastPages={true}
//                   changeCurrentPage={this.changeCurrentPage}
//                   theme="border-bottom"
//                 />
//               </div>
//             )}
//         </Modal>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   studentVisionList: state.studentVisionListReducer.studentVisionList,
//   studentVisionUpdateMessage:
//     state.studentVisionListReducer.AddstudentVisionList,
//   studentVisionUpdateEditMessage:
//     state.studentVisionListReducer.UpdatestudentVisionList,
//   stdentVisionBlob: state.studentVisionListReducer.visionBlob,
//   visionEyeResultDatalist: state.getVisionScreenDataReducer.getEyeResultData,
//   visionIshiharaDatalist: state.getVisionScreenDataReducer.getIshiharaData,
//   visionscreeningOutcomeDatalist:
//     state.getVisionScreenDataReducer.getVisionOutcomeData,
//   loading: state.studentVisionListReducer.loading,
// });

// export default withTranslation()(connect(mapStateToProps)(StudentVisionList));
