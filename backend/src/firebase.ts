import admin from "firebase-admin";

const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT env var is missing");

// dotenv may wrap multi-line values in single quotes — strip them before parsing
const json = raw.trim().replace(/^'([\s\S]*)'$/, "$1").replace(/^"([\s\S]*)"$/, "$1");

let serviceAccount: admin.ServiceAccount;
try {
  serviceAccount = JSON.parse(json) as admin.ServiceAccount;
} catch {
  throw new Error("FIREBASE_SERVICE_ACCOUNT is not valid JSON");
}

if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

export const auth = admin.auth();
export const db   = admin.firestore();
