![image](https://github.com/user-attachments/assets/4f467b21-717a-4f5d-aee4-09f0f4b4fc6b)# To-do List App

## เกี่ยวกับโปรเจค
แอปพลิเคชัน To-do List ช่วยให้ผู้ใช้สามารถเพิ่ม, แก้ไข, ทำเครื่องหมายว่าเสร็จสิ้น, และลบรายการงานได้ ผ่านการเชื่อมต่อระหว่าง **Frontend** (React) และ **Backend API** (ASP.NET Core) โดยใช้ **SQL Server** สำหรับเก็บข้อมูล

---

## Features
- เพิ่มรายการใหม่ (Add)
- แก้ไขรายการที่มีอยู่ (Edit)
- ลบรายการ (Delete)
- ทำเครื่องหมายรายการว่าเสร็จสิ้น (Toggle Completion)
- เชื่อมต่อกับฐานข้อมูล **SQL Server** ผ่าน **ASP.NET Core API**
- ใช้ **Vite** สำหรับ Frontend และ **Axios** สำหรับการเรียก API

---

## การติดตั้งและรันโปรเจค

### Backend Setup (ASP.NET Core API)
1. ติดตั้ง .NET SDK หากยังไม่มี [ดาวน์โหลดที่นี่](https://dotnet.microsoft.com/en-us/download).
2. เปิดโปรเจค **ASP.NET Core API** ใน Visual Studio.
3. รันคำสั่งต่อไปนี้ใน **Package Manager Console** เพื่อเตรียมฐานข้อมูล:
    ```bash
    Add-Migration InitialCreate
    Update-Database
    ```
4. ตรวจสอบว่าไฟล์ `appsettings.json` เชื่อมต่อกับ SQL Server อย่างถูกต้อง:
    ```json
    {
      "ConnectionStrings": {
        "DefaultConnection": "Server=localhost;Database=TodoDb;Trusted_Connection=True;"
      }
    }
    ```
5. รัน API ด้วย:
    - **Visual Studio** หรือ
    - คำสั่ง:
      ```bash
      dotnet run
      ```

### Frontend Setup (React + Vite)
1. ติดตั้ง **Node.js** หากยังไม่มี [ดาวน์โหลดที่นี่](https://nodejs.org/).
2. โคลนโปรเจคจาก GitHub หรือเตรียมไฟล์โปรเจคไว้:
    ```bash
    git clone <your-repo-url>
    cd <project-directory>
    ```
3. ติดตั้งแพ็กเกจที่ต้องการ:
    ```bash
    npm install
    ```
4. รันโปรเจคด้วยคำสั่ง:
    ```bash
    npm run dev
    ```
5. เปิดเบราว์เซอร์ที่ `http://localhost:5173`

---

## โครงสร้างของโปรเจค

---

## การใช้งาน
1. เปิด **Backend API** ที่ `https://localhost:7208/api/Todo`
2. เปิด **Frontend** ที่ `http://localhost:5173`
3. **เพิ่มรายการใหม่**: พิมพ์งานในช่องอินพุต และกดปุ่ม **"Add"**
4. **แก้ไขรายการ**: กดปุ่ม **"Edit"** แล้วแก้ไขชื่อรายการ จากนั้นกด **"Save"**
5. **ลบรายการ**: กดปุ่ม **"Delete"** เพื่อลบงาน
6. **ทำเครื่องหมายเสร็จสิ้น**: คลิกที่ชื่อรายการเพื่อขีดฆ่า

---

## API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/Todo`           | ดึงรายการทั้งหมด         |
| POST   | `/api/Todo`           | เพิ่มรายการใหม่          |
| PUT    | `/api/Todo/{id}`      | อัปเดตรายการตาม ID      |
| DELETE | `/api/Todo/{id}`      | ลบรายการตาม ID          |

---

## ตัวอย่าง API Request

**POST** `/api/Todo`  
Request Body:
```json
{
  "title": "Learn React",
  "isCompleted": false
}
{
  "id": 5,
  "title": "Learn React and Vite",
  "isCompleted": true
}
```
![image](https://github.com/user-attachments/assets/54812dd4-8990-4465-a604-cfda16196e96)
![image](https://github.com/user-attachments/assets/ebf3fc47-7502-46f3-ba2d-3e0f82832c06)
