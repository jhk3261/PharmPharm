# Generated by Django 4.2.3 on 2023-07-12 05:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('social', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HumanDrugInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('human_drug_information', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='HumanInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('human_information', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='HumanPharmacy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('human_pharmacy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mainmap_human_pharmacies', to='social.humandruginformation')),
            ],
        ),
        migrations.CreateModel(
            name='AnimalPharmacy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=100)),
                ('business_hours', models.CharField(max_length=255)),
                ('drug_stock', models.PositiveIntegerField()),
                ('office_number', models.IntegerField()),
                ('reservation_number', models.IntegerField()),
                ('pharmacist_information', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainMap.humaninformation')),
            ],
        ),
        migrations.CreateModel(
            name='AnimalDrugInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('symptom', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=100)),
                ('stock', models.PositiveIntegerField()),
                ('office_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainMap.animalpharmacy')),
            ],
        ),
    ]
