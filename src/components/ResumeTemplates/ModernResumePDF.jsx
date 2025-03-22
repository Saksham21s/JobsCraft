import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
    fontSize: 14,
    color: "#000",
  },
  section: {
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Times-Bold",
    color: "#000",
    marginBottom: 5,
  },
  headerLink: {
    fontSize: 10,
    color: "#666",
    textDecoration: "underline",
    marginRight: 8,
    marginLeft: 8,
  },
  headerLinkHover: {
    color: "#0073e6",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 10,
    color: "#666",
    flexWrap: "wrap",
  },
  contactItem: {
    marginRight: 8,
    marginLeft: 8,
  },
  contactItemLast: {
    marginRight: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "Times-Bold",
    borderBottom: "2px solid #969696",
    paddingBottom: 3,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    color: "#666",
    lineHeight: 1.4,
    marginLeft: 12,
  },
  skillstext: {
    fontSize: 12,
    color: "#222",
    lineHeight: 1.4,
    marginLeft: 12,
    marginBottom: 5,
  },
  entry: {
    marginBottom: 5,
  },
  entryTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: "#222",
    marginBottom: 4,
  },
  date: {
    fontSize: 11,
    color: "#666",
    fontFamily: "Times-Italic",
    textAlign: "right",
    marginBottom: 4,
  },
  gpa: {
    fontSize: 11,
    color: "#666",
    textAlign: "right",
    marginBottom: 4,
  },
  link: {
    fontSize: 12,
    color: "#3498db",
    textDecoration: "none",
  },
  linkHover: {
    textDecoration: "underline",
    color: "#0073e6",
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  certItem: {
    marginBottom: 7,
  },
  certTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
  },
  certDate: {
    fontSize: 10,
    fontWeight: "600",
    color: "#666",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  credentialDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    fontSize: 12,
    color: "#666",
  },
  credentialText: {
    fontSize: 12,
    fontWeight: "500",
  },
});

const ModernResumePDF = ({ formData }) => (
  <Document>
    <Page size={[600, 900]} style={styles.page}>
      {/* Header Section */}
      {(formData?.fullName ||
        formData?.phone ||
        formData?.email ||
        formData?.linkedin ||
        formData?.github ||
        formData?.portfolio) && (
          <View style={styles.header}>
            {formData.fullName && (
              <Text style={styles.name}>{formData.fullName}</Text>
            )}
            <View style={styles.contact}>
              {formData.phone && (
                <Text style={styles.contactItem}>{formData.phone}</Text>
              )}
              {formData.email && (
                <>
                  <Text style={styles.separator}>|</Text>
                  <Text style={styles.contactItem}>{formData.email}</Text>
                </>
              )}
              {formData.linkedin && (
                <>
                  <Text style={styles.separator}>|</Text>
                  <Link src={formData.linkedin} style={styles.headerLink}>
                    {"LinkedIn"}
                  </Link>
                </>
              )}
              {formData.github && (
                <>
                  <Text style={styles.separator}>|</Text>
                  <Link src={formData.github} style={styles.headerLink}>
                    {"GitHub"}
                  </Link>
                </>
              )}
              {formData.portfolio && (
                <>
                  <Text style={styles.separator}>|</Text>
                  <Link src={formData.portfolio} style={styles.headerLink}>
                    {"Portfolio"}
                  </Link>
                </>
              )}
            </View>
          </View>
        )}

      {/* Summary Section */}
      {formData?.summary && (
        <View style={styles.section}>
          <Text style={styles.title}>SUMMARY</Text>
          <Text style={styles.text}>{formData.summary}</Text>
        </View>
      )}

      {/* Education Section */}
      {formData?.education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>EDUCATION</Text>
          {formData.education.map((edu, index) => (
            <View key={index} style={styles.entry}>
              <Text style={styles.entryTitle}>
                {edu.degree} at {edu.school}, {edu.location}
              </Text>
              <View style={styles.row}>
                <Text style={styles.gpa}>GPA - {edu.gpa}</Text>
                <Text style={styles.date}>
                  {edu.startDate} - {edu.endDate || "Present"}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Experience Section */}
      {formData?.experience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>EXPEREINCE</Text>
          {formData.experience.map((exp, index) => (
            <View key={index} style={styles.entry}>
              <Text style={styles.entryTitle}>
                {exp.title} at {exp.company}
              </Text>
              <View style={styles.row}>
                <Text style={styles.gpa}>Location - {exp.location}</Text>
                <Text style={styles.date}>
                  {exp.startDate} - {exp.endDate || "Present"}
                </Text>
              </View>
              <Text style={styles.text}>{exp.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Projects Section */}
      {formData?.projects?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>PROJECTS</Text>
          {formData.projects.map((proj, index) => (
            <View key={index} style={styles.entry}>
              <View style={styles.row}>
                <Text style={styles.entryTitle}>{proj.name}</Text>
                <Text style={styles.gpa}>
                  {" "}
                  Link -{" "}
                  {proj.link && (
                    <Link src={proj.link} style={styles.link}>
                      {" "}
                      {proj.link}
                    </Link>
                  )}
                </Text>
              </View>
              <Text style={styles.text}>{proj.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Skills Section */}
      {formData?.skills && (
        <View style={styles.section}>
          <Text style={styles.title}>SKILLS</Text>
          <Text style={styles.skillstext}>{formData.skills}</Text>
        </View>
      )}

      {/* Certifications Section */}
      {formData?.certifications?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.title}>CERTIFICATIONS</Text>
          {formData.certifications.map((cert, index) => (
            <View key={index} style={styles.entry}>
              <Text style={styles.certTitle}>
                {cert.name} by {cert.issuer}
              </Text>
              <View style={styles.row}>
                <View style={styles.credentialDetails}>
                  <Text style={styles.credentialText}>
                    ID: {cert.credentialID}
                  </Text>
                 <Text>( {cert.credentialURL && (
                   <Link src={cert.credentialURL} style={styles.link}>
                      Verify Certificate
                    </Link>
                  )} )</Text> 
                </View>
                <View style={styles.certDate}>
                  <Text>Issued: {cert.issueDate}</Text>
                  {cert.expirationDate && <Text>Expires: {cert.expirationDate}</Text>}
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default ModernResumePDF;
