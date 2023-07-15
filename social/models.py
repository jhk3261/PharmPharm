from django.db import models

class HumanInformation(models.Model):
    # Fields
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    birth = models.DateField()


class HumanPharmacy(models.Model):
    # Fields
    address = models.CharField(max_length=255)
    pharmacist_information = models.OneToOneField(
        HumanInformation, on_delete=models.CASCADE
    )
    business_hours = models.CharField(max_length=255)
    drug_stock = models.IntegerField()
    office_number = models.IntegerField()
    reservation_number = models.IntegerField()


class Pharmacist(models.Model):
    # Fields
    follower = models.IntegerField()
    office_name = models.OneToOneField(
        HumanPharmacy, on_delete=models.CASCADE
    )
    advice_number = models.IntegerField()
    book_mark = models.BooleanField()
    reservation_available = models.BooleanField()
    advice_available = models.BooleanField()


class HumanDrugInformation(models.Model):
    # Fields
    symptom = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    office_name = models.CharField(max_length=255)
    stock = models.IntegerField()
