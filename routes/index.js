import express from 'express'

// Token
import { getDataUser, insertDataUser, login, logout, changePassword, loginadmin, logoutadmin } from '../controllers/UsersController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshToken.js'

// References
import { getDataRumahSakit, getDataRumahSakitFilterbyKabKotaId } from '../controllers/RumahSakitController.js'
import { getDataJenisPelayanan } from '../controllers/JenisPelayananController.js'
import { getDataCaraPembayaran } from '../controllers/CaraPembayaranController.js'
import { getDataJenisSpesialis } from '../controllers/JenisSpesialisController.js'
import { getDataJenisKegiatan, getDataJenisKegiatanLab } from '../controllers/JenisKegiatanController.js'
import { getDataJenisTindakan, getDataGroupJenisTindakan } from '../controllers/JenisGroupTindakanController.js'
import { getMetoda } from '../controllers/MetodaController.js'
import { getGolonganObat } from '../controllers/GolonganObatController.js'
import { getNoUrut } from '../controllers/NoUrutController.js'
import { getIcd10 } from '../controllers/Icd10Controller.js'
import { getDataJenisGolSebabPenyakit, getDataJenisGolSebabPenyakitA, getDataJenisGolSebabPenyakitAbyId, getDataJenisGolSebabPenyakitASebab } from "../controllers/JenisGolSebabPenyakitController.js"
import { getDataJenisGolonganSebabPenyakit, getDataJenisGolonganSebabPenyakitB, getDataJenisGolonganSebabPenyakitBId } from '../controllers/JenisGolonganSebabPenyakitController.js'
import { getDataJenisGolonganPenyakitB, getDataJenisGolonganPenyakitBId } from '../controllers/JenisGolonganPenyakitController.js'
import { getDataKabKota, getDataKabKotabyID } from '../controllers/KabKotaController.js'


// RL 3.8
import {
    deleteDataRLTigaTitikDelapan, getDataRLTigaTitikDelapan, getDataRLTigaTitikDelapanById,
    getDataRLTigaTitikDelapanDetailKegiatan, getDataRLTigaTitikDelapanKodeRSTahun, insertDataRLTigaTitikDelapan, updateDataRLTigaTitikDelapan
} from "../controllers/RLTigaTitikDelapanController.js";


// RL 4a
import {
    deleteDataRLEmpatA,
    getDataRLEmpatA,
    getDataRLEmpatAById,
    getDataRLEmpatAKodeRSTahun,
    insertDataRLEmpatA,
    updateDataRLEmpatA,
} from "../controllers/RLEmpatAController.js"

// RL 4a sebab
import {
    deleteDataRLEmpatASebab,
    getDataRLEmpatASebab,
    getDataRLEmpatASebabById,
    getDataRLEmpatASebabKodeRSTahun,
    insertDataRLEmpatASebab,
    updateDataRLEmpatASebab,
} from "../controllers/RLEmpatASebabController.js";
import { getDataValidasiByRsId, getStatusValidasi, insertValidasi, updateValidasi } from '../controllers/ValidasiController.js'

const router = express.Router()

// Rumah Sakit
router.get('/apisirs/rumahsakit/:id', verifyToken, getDataRumahSakit)

// User
router.get('/apisirs/users', verifyToken, getDataUser)
router.post('/apisirs/users', insertDataUser)
router.patch('/apisirs/users/:id/admin', verifyToken, changePassword)

// Token
router.post('/apisirs/login', login)
router.delete('/apisirs/logout', logout)
router.get('/apisirs/token', refreshToken)

// Jenis Pelayanan
router.get('/apisirs/jenispelayanan', verifyToken,
    getDataJenisPelayanan)

// Cara Pembayaran
router.get('/apisirs/carapembayaran', verifyToken,
    getDataCaraPembayaran)

// Jenis Kegiatan
router.get('/apisirs/jeniskegiatan', verifyToken,
    getDataJenisKegiatan)
//Jenis Kegiatan Lab 3.8
router.get('/apisirs/jeniskegiatanlab', verifyToken,
    getDataJenisKegiatanLab)

// Jenis Spesialis
router.get('/apisirs/jenisspesialis', verifyToken,
    getDataJenisSpesialis)

// Group Jenis Tindakan
router.get('/apisirs/jenisgrouptindakan', verifyToken, getDataGroupJenisTindakan)

// Jenis Golongan Sebab Penyakit
router.get(
    "/apisirs/jenisgolsebabpenyakit",
    verifyToken,
    getDataJenisGolSebabPenyakit
)
router.get(
    "/apisirs/jenisgolsebabpenyakita/cari",
    verifyToken,
    getDataJenisGolSebabPenyakitA
)
router.get(
    "/apisirs/jenisgolsebabpenyakitasebab/cari",
    verifyToken,
    getDataJenisGolSebabPenyakitASebab
)
router.get(
    "/apisirs/jenisgolsebabpenyakita/id",
    verifyToken,
    getDataJenisGolSebabPenyakitAbyId
)

router.get('/apisirs/jenisgolongansebabpenyakit', verifyToken, getDataJenisGolonganSebabPenyakit)



// RL 3.8
router.post(
    "/apisirs/rltigatitikdelapan",
    verifyToken,
    insertDataRLTigaTitikDelapan
);
router.get(
    "/apisirs/rltigatitikdelapan",
    verifyToken,
    getDataRLTigaTitikDelapanDetailKegiatan
);
router.get(
    "/apisirs/rltigatitikdelapan/:id",
    verifyToken,
    getDataRLTigaTitikDelapanById
);
router.delete(
    "/apisirs/rltigatitikdelapan/:id",
    verifyToken,
    deleteDataRLTigaTitikDelapan
);
router.patch(
    "/apisirs/rltigatitikdelapan/:id",
    verifyToken,
    updateDataRLTigaTitikDelapan
);


// RL 3.12
router.get('/apisirs/getmetoda', verifyToken, getMetoda)

// RL 3.13a

router.get('/apisirs/getgolonganobat', verifyToken, getGolonganObat)

// RL 3.13b

router.get('/apisirs/getgolonganobat', verifyToken, getGolonganObat)


// RL 4a
router.post("/apisirs/rlempata", verifyToken, insertDataRLEmpatA);
router.get("/apisirs/rlempata", verifyToken, getDataRLEmpatA);
router.delete("/apisirs/rlempata/:id", verifyToken, deleteDataRLEmpatA);
router.get("/apisirs/rlempata/:id", verifyToken, getDataRLEmpatAById);
router.patch("/apisirs/rlempata/:id", verifyToken, updateDataRLEmpatA);

// RL 4aSebab
router.post("/apisirs/rlempatasebab", verifyToken, insertDataRLEmpatASebab);
router.get("/apisirs/rlempatasebab", verifyToken, getDataRLEmpatASebab);
router.delete(
    "/apisirs/rlempatasebab/:id",
    verifyToken,
    deleteDataRLEmpatASebab
);
router.get("/apisirs/rlempatasebab/:id", verifyToken, getDataRLEmpatASebabById);
router.patch(
    "/apisirs/rlempatasebab/:id",
    verifyToken,
    updateDataRLEmpatASebab
);

// RL 4b
router.get('/apisirs/rlempatb/penyakit', verifyToken, getDataJenisGolonganPenyakitB)
router.get('/apisirs/rlempatb/idpenyakit', verifyToken, getDataJenisGolonganPenyakitBId)

// RL 4b sebab
router.get('/apisirs/rlempatbsebab/penyakit', verifyToken, getDataJenisGolonganSebabPenyakitB)
router.get('/apisirs/rlempatbsebab/idpenyakit', verifyToken, getDataJenisGolonganSebabPenyakitBId)

router.get('/apisirs/getnourut', verifyToken, getNoUrut)
router.get('/apisirs/geticd10', verifyToken, getIcd10)

// RL 5.4
router.get('/apisirs/getnourut', verifyToken, getNoUrut)
router.get('/apisirs/geticd10', verifyToken, getIcd10)


// DINKES PROVINSI
router.post('/apisirs/loginadmin', loginadmin)
router.delete('/apisirs/logoutadmin', logoutadmin)

// Get Data Dinkes
// router.get('/apisirs/apisirs/:id', verifyToken, getDataRumahSakit)

// GET DATA KAB KOTA
router.get('/apisirs/kabkota', verifyToken, getDataKabKota)

// GET DATA KABKOTA DINKES KAB
// router.get('/apisirs/kabkotaid', verifyToken, getDataKabKotabyID)

// GET DATA RS BY KAB KOTA
router.get('/apisirs/rumahsakit', verifyToken, getDataRumahSakitFilterbyKabKotaId)
// Rumah Sakit
router.get('/apisirs/rumahsakit/:id', verifyToken, getDataRumahSakit)
// // DINKES KAB/KOTA

// Validasi Data
router.get('/apisirs/validasi', verifyToken, getDataValidasiByRsId)
router.post('/apisirs/validasi', verifyToken, insertValidasi)
router.patch('/apisirs/validasi/:id', verifyToken, updateValidasi)
router.get('/apisirs/statusvalidasi', getStatusValidasi)


// // GET DATA
router.get("/apisirs/rltigatitikdelapanadmin", verifyToken, getDataRLTigaTitikDelapanKodeRSTahun)
router.get('/apisirs/rlempataadmin', verifyToken, getDataRLEmpatAKodeRSTahun)
router.get('/apisirs/rlempatasebabadmin', verifyToken, getDataRLEmpatASebabKodeRSTahun)


export default router