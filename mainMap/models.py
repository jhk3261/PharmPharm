from django.db import models
from social.models import HumanInformation, HumanPharmacy, HumanDrugInformation

class HumanInformation(models.Model):
    # Fields
    human_information = models.ForeignKey(HumanInformation, on_delete=models.CASCADE)

class HumanPharmacy(models.Model):
    human_pharmacy = models.ForeignKey(HumanPharmacy, on_delete=models.CASCADE)
    
class HumanDrugInformation(models.Model):
     human_drug_information = models.ForeignKey(HumanDrugInformation, on_delete=models.CASCADE)


class AnimalPharmacy(models.Model):
    # Fields
    address = models.CharField(max_length=255)
    pharmacist_information = models.ForeignKey(
        HumanInformation, on_delete=models.CASCADE
    )
    business_hours = models.CharField(max_length=255)
    drug_stock = models.IntegerField()
    office_number = models.IntegerField()
    reservation_number = models.IntegerField()

class AnimalDrugInformation(models.Model):
    # Fields
    symptom = models.CharField(max_length=255)
    address = models.ForeignKey(
        AnimalPharmacy, related_name="address", on_delete=models.CASCADE
    )
    office_name = models.ForeignKey(
        AnimalPharmacy, on_delete=models.CASCADE
    )
    stock = models.ForeignKey(
        AnimalPharmacy, related_name="drug_stock", on_delete=models.CASCADE
    )

