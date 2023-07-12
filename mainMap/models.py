from django.db import models
from social.models import HumanInformation, HumanPharmacy, HumanDrugInformation

class HumanInformation(models.Model):
    # Fields
   human_information = models.CharField(max_length=100)

class HumanPharmacy(models.Model):
    human_pharmacy = models.ForeignKey(HumanDrugInformation, on_delete=models.CASCADE, related_name='mainmap_human_pharmacies')

class HumanDrugInformation(models.Model):
    human_drug_information = models.CharField(max_length=100)


class AnimalPharmacy(models.Model):
    # Fields
    address = models.CharField(max_length=100)
    pharmacist_information = models.ForeignKey(
        HumanInformation, on_delete=models.CASCADE
    )
    business_hours = models.CharField(max_length=255)
    drug_stock = models.PositiveIntegerField()
    office_number = models.IntegerField()
    reservation_number = models.IntegerField()

    # 이후에 나오는 클래스 멤버들도 적절히 들여쓰기 해야 합니다.


class AnimalDrugInformation(models.Model):
    # Fields
    symptom = models.CharField(max_length=255)
    address = models.CharField(max_length=100)
    office_name = models.ForeignKey(AnimalPharmacy, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField()

