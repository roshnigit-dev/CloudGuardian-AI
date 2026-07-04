from fastapi import APIRouter
from app.services.aws_client import get_ec2_client

router = APIRouter(prefix="/ec2", tags=["EC2"])


@router.get("/")
def list_instances():

    ec2 = get_ec2_client()

    response = ec2.describe_instances()

    instances = []

    for reservation in response["Reservations"]:
        for instance in reservation["Instances"]:

            instances.append({
                "InstanceId": instance["InstanceId"],
                "State": instance["State"]["Name"],
                "Type": instance["InstanceType"],
                "AvailabilityZone": instance["Placement"]["AvailabilityZone"]
            })

    return instances