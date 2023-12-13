using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TofuApi.Migrations
{
    public partial class InintiallMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Image",
                table: "Carriers",
                type: "LONGBLOB",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "LONGBLOB");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Image",
                table: "Carriers",
                type: "LONGBLOB",
                nullable: false,
                defaultValue: new byte[0],
                oldClrType: typeof(byte[]),
                oldType: "LONGBLOB",
                oldNullable: true);
        }
    }
}
