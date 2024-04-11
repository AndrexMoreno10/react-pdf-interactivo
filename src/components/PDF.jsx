import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";
import toclogo from "../TOC-WEB-logo-slide1.png";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    maxWidth: 600,
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    border: "2px solid #333",
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    maxWidth: "100%",
    maxHeight: 300,
    borderRadius: 5,
  },
});

function PDF({ titulo, descripcion, autor, imagen }) {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{titulo ? "Vista Previa PDF" : "Título del Documento"}</Text>
          {autor && <Text style={styles.author}>Autor: Andrés Daniel Moreno Prieto</Text>}
          {descripcion && <Text style={styles.description}>Descripción: Esto es un ejemplo de usar React PDF</Text>}
          {imagen && <Image src={toclogo} style={styles.image} />}
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
