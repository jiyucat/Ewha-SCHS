import os

# 최상위 폴더 경로 설정
base_folder = "C:/Users/irisc/Desktop/images/"

# 최상위 폴더 안의 모든 하위 폴더(날짜 폴더)를 찾음
date_folders = [d for d in os.listdir(base_folder) if os.path.isdir(os.path.join(base_folder, d))]

# 날짜별 폴더 안의 파일명을 변경
for date in date_folders:
    date_folder_path = os.path.join(base_folder, date)

    # 날짜 폴더 안의 모든 파일 가져오기
    files = os.listdir(date_folder_path)
    files.sort()  # 파일 정렬 (순서대로 정리)

    # 파일 개수 확인
    if not files:
        print(f"📂 {date} 폴더에 파일이 없습니다.")
        continue

    # 파일 이름 변경
    for index, filename in enumerate(files, start=1):
        # 파일 확장자 가져오기
        file_extension = os.path.splitext(filename)[1].lower()  # 확장자 (예: .jpg, .png)
        old_file_path = os.path.join(date_folder_path, filename)
        new_file_name = f"{date}_{index}{file_extension}"
        new_file_path = os.path.join(date_folder_path, new_file_name)

        # 파일 이름이 다를 경우 변경
        if filename != new_file_name:
            os.rename(old_file_path, new_file_path)
            print(f"📂 {date}: {filename} → {new_file_name}")
        else:
            print(f"✅ {date}: {filename} (이미 변경됨)")

print("\n🎯 모든 날짜 폴더의 파일 이름이 정리되었습니다!")
